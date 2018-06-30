<template lang='pug'>
.posting
  #add-post-button(@click='editPost')
    v-button(type='default' shape='circle' icon='plus' size='large')
  v-modal(v-model='modalVisible' title='Write a Post'
    @onOk='onOk' @onCancel='onCancel'
    okText='发布' cancelText='取消')
    #edit-post
      .post-category
        span()| 发布到
        v-icon(type='caret-right') &nbps; |
        v-select(:showSearch='true' style='min-width: 100px;' v-model.trim='postCategory' placeholder='选择版块')
          .item(v-for='category in categories')
            v-option(v-bind:value='category') {{ category }}
      .more-menu
        v-dropdown(placement='bottomRight' trigger='click')
          a.ant-dropdown-link(href='javascript:;' slot='title' title='更多')
            v-icon(type='ellipsis' style='transform: rotate(90deg);')
          v-dropdown-menu(slot='menu')
            v-dropdown-item(index='0')
              a.follow(@click='') ...index.0
            v-dropdown-item(index='1')
              a.ignore(@click='') ...index.1
            v-dropdown-item(index='2')
              a.report(@click='') ...index.2
      .post-title
        v-input(v-model.trim='postTitle' type='textarea'
          :autosize='{minRows: 1, maxRows: 2}' placeholder='标题 (可选)')
      hr
      .post-body
        v-input(v-model='postContent' type='textarea'
          :autosize='{minRows: 3}' placeholder='你最近有什么新鲜事要分享吗?')
      .post-attachment
        v-button(type='default' icon='camera' shape='circle' size='large')
        v-button(type='default' icon='link' shape='circle' size='large')

      //- .post-send
      //-   a.option.cancel(@click='inputting = false') 取消
      //-   a.option.confirm(@click='onPost') 发布
</template>


<script src='./posting.component.ts' lang='ts'></script>
<style src='./posting.component.styl' lang='stylus' scoped></style>
