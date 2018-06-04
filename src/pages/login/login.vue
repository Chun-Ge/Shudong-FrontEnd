<template lang='pug'>
  .login-container
    .panel.panel-default
      .panel-heading
        .text-wrapper.text-center Chun-Ge 树洞

      .panel-body
        .login-info
          .input
            v-input(type='text' v-model='email' size='large' placeholder="邮箱")
          .input(@keyup.enter='submit')
            v-input(type='password' v-model='password' size='large' placeholder="密码")
        .login-option 忘记密码？
        .login-confirm(@click='submit')
          v-button.btn(type="primary" :loading='loading') 登陆

      .panel-footer
        .switch-to-register 没有账号？
          router-link(:to='"register"') 注册
</template>

<script src='./login.ts' lang='ts'></script>
<style src='./login.styl' lang='stylus' scoped></style>
