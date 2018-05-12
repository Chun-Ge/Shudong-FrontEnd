<template lang='pug'>
  .login-container
    .panel.panel-default
      .panel-heading
        .text-wrapper.text-center Chun-Ge Shudong

      .panel-body
        .login-info
          v-input(type='text' v-model='username' placeholder="邮箱名")
          v-input(type='password' v-model='password' placeholder="密码")
        .login-option 忘记密码？
        .login-confirm(@click='submit')
          v-button(type="primary") 登陆

      .panel-footer
        .switch-to-register 没有账号？
          span 注册
</template>

<script src='./login.ts' lang='ts'></script>
<style src='./login.styl' lang='stylus'></style>
