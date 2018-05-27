<template lang='pug'>
  .register-container
    .panel.panel-default
      .panel-heading
        .text-wrapper
          .text-center Chun-Ge 树洞
          .text-small 注册Chun-Ge， 发现更大的世界

      .panel-body
        .register-info
          .input
            v-input(type='text' v-model='username' size='large' placeholder="邮箱")
          .input(@keyup.enter='submit')
            v-input(type='password' v-model='password' size='large' placeholder="密码")
        .register-statement 注册即代表同意《Chun-Ge协议》《隐私政策》
        .register-confirm(@click='submit')
          v-button.btn(type="primary" :loading='loading') 注册

      .panel-footer
        .switch-to-register 已有账号？
          router-link(:to='"login"') 登陆
</template>

<script src='./register.ts' lang='ts'></script>
<style src='./register.styl' lang='stylus' scoped></style>
