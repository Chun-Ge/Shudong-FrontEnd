<template lang='pug'>
.card-container
  v-card(:title='cardTitle' :bordered='false' style='width: 400px')
    .card-header(slot='extra')
      .concrete
      .setting
        v-dropdown(trigger='click' placement='bottomRight')
          a.ant-dropdown-link(href='javascript:;' slot='title')
            | 更多
            v-icon(type='down')
          v-dropdown-menu(slot='menu')
            v-dropdown-item(index='0')
              a.follow 关注帖子
            v-dropdown-item(index='1')
              a.ignore 忽略帖子
            v-dropdown-item(index='2')
              a.report 举报滥用行为
    .card-content
      .text
        .total-text(v-if='text.length <= 52') {{ text }}
        .trim-text(v-else)
          .not-read-more(v-if='!readMore')
            .trim-text-content {{ text.slice(0, 52)}}
            a.more(href='javascript:;' @click='readMore = true') 阅读全文
          .read-more(v-else)
            .total-text {{ text }}
            a.more-text(href='javascript:;' @click='readMore = false') 收起

      .img(v-if='imageLink')
        img(:src='imageLink')
    .card-footer
      .others-comments
        a.more(href='javascript:;' @click='showMoreComments = !showMoreComments') 显示/关闭更多评论
        .preview(v-if='!showMoreComments')
          .comment(v-for='{comment, id} in comments.slice(0,3)')
            span {{ id + ':    '}}
            span {{ comment }}
        .total-comments(v-else)
          .comment(v-for='{comment, id} in comments')
            span {{ id + ':    '}}
            span {{ comment }}
      .draft-editor
        .before-input
          .input
            v-input(placeholder="发表评论")
          .star
            v-icon(type='like')
            | {{ '+' + likeNum }}
          .share
        .inputing
          .input
          .to-do
            span 取消
            span 发布
</template>

<script src='./card.ts' lang='ts'></script>
<style src='./card.styl' lang='stylus' scoped></style>

