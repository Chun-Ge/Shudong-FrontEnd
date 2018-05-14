<template lang='pug'>
  .logout
    v-popconfirm(placement='bottomRight' :title='logoutConfirmText'
      @onConfirm='onConfirm')
      v-button 登出
</template>

<script src='./logout.component.ts' lang='ts'></script>
<style src='./logout.component.styl' lang='stylus'></style>

