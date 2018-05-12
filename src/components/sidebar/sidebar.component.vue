<template lang='pug'>
  v-menu(mode='inline' style='width: 140px;'
    @onOpenChange='onOpenChange'
    @onSelect='onSelect')
    .content
      v-menu-item(index='0' @click='$emit("changeView","home")')
        v-icon(type='home')
        span 首页
      v-menu-item(index='1' @click='$emit("changeView","home")')
        v-icon(type='compass')
        span 发现
      v-menu-item(index='2' @click='$emit("changeView","home")')
        v-icon(type='appstore')
        span 板块
      v-menu-item(index='3' @click='$emit("changeView","home")')
        v-icon(type='user')
        span 用户
    .system-setting
      v-menu-item(index='4' @click='$emit("changeView","home")')
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
