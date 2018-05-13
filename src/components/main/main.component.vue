<template lang='pug'>
  .main
    .topbar-wrapper
      topbar
    v-row(type='flex' justify='space-between')
      v-col(:span='4')
        transition(name='slide-fade')
          .sidebar-wrapper(v-if='!hiddenMenu')
            sidebar
      v-col(:span='19')
        .content-container
          router-view
</template>

<script src='./main.component.ts' lang='ts'></script>
<style src='./main.component.styl' lang='stylus'></style>
