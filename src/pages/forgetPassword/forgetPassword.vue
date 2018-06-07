<template lang='pug'>
  .forget-password-container
    .panel.panel-default
      .panel-heading
        .text-wrapper.text-center 重置密码

      .panel-body
        .reset-password-info
          .input
            v-input(type='text' v-model='email' size='large' placeholder="邮箱")
          button(@click.prevent='getAuthCode', v-show='authCodeLatency <= 0') 获取验证码
          button(@click.prevent='', v-show='authCodeLatency > 0') 已发送 ({{authCodeLatency}}s 后可重新获取)
          .input
            v-input(type='text' v-model='authCode' size='large' placeholder="Auth Code")
          .input
            v-input(type='text', placeholder='请输入新密码', name='newPassword', v-model='newPassword')
          .input(@keyup.enter='submit')
            v-input(type='text', placeholder='请确认密码', name='confirmPassword', v-model='confirmPassword')
        .reset-confirm(@click='submit')
            v-button.btn(type="primary" :loading='loading') 重置
</template>

<script lang='ts'>
import { mapMutations, mapActions } from "vuex";
import { getAuthCode, resetPassword } from "../../shared/services/user.service";

const err = [
  {
    title: "输入错误",
    description: "用户名或者密码不能为空"
  },
  {
    title: "邮箱格式错误",
    description: "邮箱格式不正确"
  },
  {
    title: "邮箱类型错误",
    description: "目前只支持中大邮箱"
  }
];

export default {
  data: () => {
    return {
      email: "",
      authCode: "",
      officialAuthCode: "",

      loading: false,
      authCodeLatency: 0,
      authCodeTimer: null,

      newPassword: "",
      confirmPassword: "",
    };
  },
  methods: {
    ...mapMutations(["SET_JWTAUTH"]),
    ...mapActions(["getUserInfo"]),

    openNotificationWithIcon(type: string, title: string, descrip: string) {
      this.$notification[type]({
        message: title,
        description: descrip
      });
    },
    validate(email: string, password: string) {
      if (this.email === "" || this.password === "") {
        return err[0];
      }
      // 开发阶段免去邮箱格式限制
      const emailRegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.email.match(emailRegExp) === null) {
        this.loading = false;
        return err[1];
      }
      if (
        this.email.match(/^([a-zA-Z0-9_-])+@mail\d?\.sysu\.edu\.cn/) === null
      ) {
        this.loading = false;
        return err[2];
      }
      return null;
    },
    validEmail(email: string) {
      if (this.email === "") {
        return err[0];
      }
      // 开发阶段免去邮箱格式限制
      const emailRegExp = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (this.email.match(emailRegExp) === null) {
        this.loading = false;
        return err[1];
      }
      if (
        this.email.match(/^([a-zA-Z0-9_-])+@mail\d?\.sysu\.edu\.cn/) === null
      ) {
        this.loading = false;
        return err[2];
      }
      return null;
    },

    async getAuthCode() {
      this.loading = true;
      let invalid = this.validEmail(this.email);
      if (invalid) {
        this.loading = false;
        this.openNotificationWithIcon(
          "error",
          invalid.title,
          invalid.description,
        );
        return;
      }
      try {
        let res = await getAuthCode(this.email);
        this.authCodeLatency = 60;
        this.authCodeTimer = setInterval(() => {
          this.authCodeLatency--;
          if (this.authCodeLatency <= 0) {
            clearInterval(this.authCodeTimer);
          }
        }, 1000);
        this.officialAuthCode = res.data.data.authCode;
      } catch (error) {
        this.openNotificationWithIcon("error", "获取验证码失败", `请稍后重试`);
        console.log("error");
      } finally {
        this.loading = false;
      }
    },
    async submit() {
      this.loading = true;

      let e = this.authCode === this.officialAuthCode ? null : {
        title: '验证码错误',
        description: '请稍后重试',
      }
      if (e) {
        this.openNotificationWithIcon("error", e.title, e.description);
        return;
      }

      e = this.validate(this.email, this.newPassword);
      if (e) {
        this.openNotificationWithIcon("error", e.title, e.description);
        return;
      }

      if (this.newPassword !== this.confirmPassword) {
        e = {
          title: '前后密码不一致',
          description: '请重新输入并确认',
        }
        this.openNotificationWithIcon("error", e.title, e.description);
        return;
      }

      try {
        let res = await resetPassword(this.email, this.authCode, this.newPassword);
        this.$router.push("/");
        this.openNotificationWithIcon("success", "重置密码成功", `欢迎回来`);
      } catch (error) {
        this.openNotificationWithIcon("error", "重置密码失败", `请重新注册`);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>


<style lang='stylus' scoped>
.forget-password-container
  width: 100%
  display: flex
  flex-direction: row
  align-items: center
  justify-content: center

  .panel
    margin-top: 10%
    background-color: white
    padding: 50px

    .panel-heading
      margin-bottom: 5%
      font-size: 400%

      .text-wrapper
        .text-small
          font-size: 40%
          text-align: center
          // color: #c4c4c4
          opacity: 0.7

    .panel-body
      margin: 2% 0%
      width: 100%

      .reset-password-info
        margin: 2% 0%

        .input
          width: 100%
          margin: 3% 0%

      .reset-confirm
        width: 100%

        button
          width: 100%
          font-size: 130%

    .panel-footer
      margin-top: 10px
      text-align: center
      font-size: 130%
      width: 100%
      background-color: #F6F6F6
</style>
