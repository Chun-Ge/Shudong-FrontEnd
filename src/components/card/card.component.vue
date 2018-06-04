<template lang='pug'>
.card-container
  .loading(v-if='loading')
    v-card(style="width: 100%" :title="totalTitle" loading)
  .loaded(v-else)
    v-card(:title='totalTitle' :bordered='false' style='width: 100%')
      .card-header(slot='extra')
        .concrete
        .setting
          v-dropdown(placement='bottomRight')
            a.ant-dropdown-link(href='javascript:;' slot='title')
              | 更多
              v-icon(type='down')
            v-dropdown-menu(slot='menu' v-if='!modalVisible')
              v-dropdown-item(index='0')
                a.deletePost(@click='onDeletePost()') 删除帖子
              v-dropdown-item(index='1')
                a.follow(@click='onStar') 关注帖子
              v-dropdown-item(index='2')
                a.ignore(@click='onIgnore') 忽略帖子
              v-dropdown-item(index='3')
                a.report(@click='showModalReportPost()') 举报滥用行为
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
            span(v-if='!showMoreComments') 更多
            span {{ '评论&ensp;(共' + comments.length + '条)' }}
          .preview(v-if='!showMoreComments')
            .comment(v-for='comment in previewComment')
              span.email {{ comment.author + ':&ensp;'}}
              span {{ comment.content }}
          .total-comments(v-else)
            .comment(v-for='comment in comments')
              .email-wrapper
                span.email {{ comment.author + '&ensp;'}}
                span(v-if='comment["like_count"] && comment["like_count"] !== 0')
                  | {{ '+' + comment["like_count"] }}
              .comment-content {{ comment.content }}
              .interactive
                a.like(@click='toggleLikeComment(comment.commentId)') +1
                a.report(@click='showModalReportComment(comment.commentId)') 举报
        .draft-editor
          .before-input(v-if='!inputting')
            .input
              v-input(placeholder="发表评论" @input='inputting = true')
            .like(@click='toggleLikePost')
              div(@click='toggleLikeButtonType')
                v-button(:type='likeButtonType' icon='like')
                  span {{ likeCountPost }}
            .share(@click='onShare')
              v-button(type='default' icon='share-alt' shape='circle')
          .inputting(v-else)
            .input(@keyup.enter='onComment')
              v-input(placeholder="发表评论" v-model='inputComment')
            .to-do
              a.option.cancel(@click='inputting = false') 取消
              a.option.confirm(@click='onComment') 发布
  v-modal(v-model='modalVisible' title='举报'
    @onOk='onOk' @onCancel='onCancel')
    .input(@keyup.enter='onOk')
      v-input(placeholder='请输入举报原因' v-model='reportInfo.reason')
</template>

<script src='./card.component.ts' lang='ts'></script>
<style src='./card.component.styl' lang='stylus'></style>

