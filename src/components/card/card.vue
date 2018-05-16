<template lang='pug'>
.card-container
  v-card(:title='title' :bordered='false' style='width: 400px')
    .card-header(slot='extra')
      .concrete
      .setting
        v-dropdown(trigger='click' placement='bottomRight')
          a.ant-dropdown-link(href='javascript:;' slot='title')
            | 更多
            v-icon(type='down')
          v-dropdown-menu(slot='menu')
            v-dropdown-item(index='0')
              a.follow(@click='onStar') 关注帖子
            v-dropdown-item(index='1')
              a.ignore(@click='onIgnore') 忽略帖子
            v-dropdown-item(index='2')
              a.report(@click='onReportToPost') 举报滥用行为
    .card-content
      .text
        .total-text(v-if='content.length <= 52') {{ content }}
        .trim-text(v-else)
          .not-read-more(v-if='!readMore')
            .trim-text-content {{ content.slice(0, 52)}}
            a.more(@click='readMore = true') 阅读全文
          .read-more(v-else)
            .total-text {{ content }}
            a.more-text( @click='readMore = false') 收起

      //- .img(v-if='imageLink')
        img(:src='imageLink')
    .card-footer
      .others-comments(v-if='comments.length !== 0')
        a.more(@click='showMoreComments = !showMoreComments')
          | {{ '显示/关闭更多评论&ensp;(共' + comments.length + '條)' }}
        .preview(v-if='!showMoreComments')
          .comment(v-for='comment in comments.slice(0,3 > comments.length ? comments.length : 3 )')
            span.username {{ comment.author + ':&ensp;'}}
            span {{ comment.content }}
        .total-comments(v-else)
          .comment(v-for='comment in comments')
            .username-wrapper
              span.username {{ comment.author + '&ensp;'}}
              span(v-if='comment["like_count"] && comment["like_count"] !== 0')
                | {{ '+' + comment["like_count"] }}
            .comment-content {{ comment.content }}
            .interactive
              a.like(@click='toggleLikeComment(comment.commentId)') +1
              a.report(@click='onReportToComment(comment.commentId)') 举报
      .draft-editor
        .before-input(v-if='!inputting')
          .input
            v-input(placeholder="发表评论" @input='inputting = true')
          .like(@click='toggleLikePost')
            v-button(type='default' icon='like')
              span {{ likeCountPost }}
          .share
        .inputting(v-else)
          .input
            v-input(placeholder="发表评论" v-model='inputComment')
          .to-do
            a.option.cancel(@click='inputting = false') 取消
            a.option.confirm(@click='onComment') 发布
</template>

<script src='./card.ts' lang='ts'></script>
<style src='./card.styl' lang='stylus' scoped></style>

