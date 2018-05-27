<template lang="pug">
  .home
    .posts-container
      .flow(v-for='postSet in postGroups')
        .post-wrapper(v-for='p in postSet')
          post-card(:postId='String(p.postId)'
            :author='p.author'
            :title='p.title'
            :content='p.summary'
            :likeCountPost='p.likeCount'
            :commentCount='p.commentCount')
    .loading(v-if='loading')
      | 加载更多...

</template>
<script src='./home.ts' lang="ts"></script>
<style src='./home.styl' lang="stylus" scoped></style>

