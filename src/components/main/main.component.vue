<template lang='pug'>
  .main
    .topbar-wrapper
      topbarComponent
    .sidebar-wrapper
      transition(name='slide-fade')
        sidebarComponent(v-if='!hiddenMenu')
    .content-container
      router-view
    //- v-row(type='flex' justify='start')
    //-   v-col(:span='5')
    //-     transition(name='slide-fade')
    //-       .sidebar-wrapper(v-if='!hiddenMenu')
    //-         sidebar
    //-   v-col(:span='19')
    //-     .content-container
    //-       router-view
</template>

<script src='./main.component.ts' lang='ts'></script>
<style src='./main.component.styl' lang='stylus' scoped></style>
