<template lang='pug'>
  .sidebar.small-remove
    v-menu(mode='inline' style='width: 200px;'
      size='large'
      @onSelect='onSelect')
      v-menu-item(index='0')
        v-icon(type='home')
        span 首页
      v-menu-item(index='1')
        v-icon(type='compass')
        span 发现
      v-menu-item(index='2')
        v-icon(type='appstore')
        span 话题
      v-menu-item(index='3')
        v-icon(type='user')
        span 用户
      v-menu-item(index='4')
        v-icon(type='setting')
        span 设置
    //- v-sub-menu(index='sub1')
    //-   template(slot='title')
    //-     v-icon(type='setting')
    //-     span Navigation Three
    //-   v-menu-item(index='9') Option 9
    //-   v-menu-item(index='10') Option 10
    //-   v-menu-item(index='11') Option 11
    //-   v-menu-item(index='12') Option 12
</template>

<script src='./sidebar.component.ts' lang='ts'></script>
<style src='./sidebar.component.styl' lang='stylus' scoped></style>
