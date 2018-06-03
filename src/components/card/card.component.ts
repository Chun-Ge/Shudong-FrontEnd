import { 
  retrieveComments,
  toggleLikeComment,
  commentToPost,
  ReportComment } from '../../shared/services/comment.service'
import { 
  toggleLikePost,
  toggleStarPost,
  reportPost,
  sharePost,
  deletePost } from '../../shared/services/post.service'

interface ReportInfo {
  type: string,
  reason: string,
  id: string
}

declare var postId;
export default {
  name: 'card',
  props: {
    postId: String,
    author: String,
    title: {
      type: String,
      default: '杂谈'
    },
    content: {
      type: String,
      required: true
    },
    likeCountPost: Number,
    commentCount: Number
  },
  
  data: () => {
    return {
      reportInfo: {
        type: '',
        reason: '',
        id: ''
      },
      modalVisible: false,
      likeButtonType: 'default',
      loading: true,
      reportReason: '',
      currentUserLikePost: false,
      comments: [],
      readMore: false,
      showMoreComments: false,
      inputComment: '',
      inputting: false
    }
  },

  computed: {
    previewComment() {
      return this.comments.slice(0,3 > this.comments.length ? this.comments.length : 3 )
    },
    totalTitle() {
      return this.author + ' > ' + this.title;  
    }
  },

  async beforeMount()  {
    await this.init();
  },

  methods: {
    toggleLikeButtonType() {
      console.log('this.buttonType');
      if(this.likeButtonType === 'default') {
        this.likeButtonType = 'primary';
      } else {
        this.likeButtonType = 'default';
      }
    },
    async init() {
      await this.getComments();
      this.loading = false;
    },
    async getComments() {
      try {
        let res = await retrieveComments(this.postId);
        this.comments = res.data.data.comments;
      } catch(err) {
        console.log(err)
        this.openNotificationWithIcon('error','獲取评论失败');
      }
    },
    openNotificationWithIcon(type: string, title: string, descrip: string) {
      this.$notification[type]({
        message: title,
        description: descrip,
      })
    },
    async onDeletePost() {
      try {
        await deletePost(this.postId);
        this.openNotificationWithIcon('success', '删帖成功');
        // console.log(this)
        // this.$emit('deletePost', postId);
      } catch(e) {
        this.openNotificationWithIcon('error', '删帖失败');
      }
    },
    async onStar() {
      try {
        await toggleStarPost(this.postId)
        this.openNotificationWithIcon('success', '关注成功');
      } catch(e) {
        this.openNotificationWithIcon('error', '关注失败')
      }
    },
    onIgnore() {
      this.openNotificationWithIcon('info', '此功能日後再說');
    },
    async reportToPost(reason: string) {
      try {
        await reportPost(this.postId, this.reason);
        this.openNotificationWithIcon('success', '举报成功，請等待');
      } catch(e) {
        this.openNotificationWithIcon('error', '举报失败');
      } finally {
        this.reportInfo.type='';
        this.reportInfo.reason='';
      }
    },
    async toggleLikePost() {
      try {
        let res = await toggleLikePost(this.postId);
        this.currentUserLikePost = res.data.data.currentUserLike;
        this.likeCountPost = res.data.data.currentLikeCount;
        if(res.data.data.currentUserLike) {
          this.openNotificationWithIcon('success', '点赞成功');
        } else {
          this.openNotificationWithIcon('success', '已取消点赞');
        }
      } catch(e) {
        this.openNotificationWithIcon('error', '操作失败');
      }
    },
    async reportComment(commentId: string, reason: string = 'no reason') {
      try {
        await ReportComment(this.postId, commentId,reason);
        this.openNotificationWithIcon('success', '举报成功');
      } catch(e) {
        this.openNotificationWithIcon('error', '举报失败');
      } finally {
        this.reportInfo.type='';
        this.reportInfo.reason='';
      }
    },
    async toggleLikeComment(commentId: string) {
      try {
        let res = await toggleLikeComment(this.postId, commentId);
        if(res.data.data.currentUserLike) {
          this.openNotificationWithIcon('success', '点赞成功');
        } else {
          this.openNotificationWithIcon('success', '已取消点赞');
        }
      } catch(e) {
        this.openNotificationWithIcon('error', '操作失败');
      }
    },
    async onComment() {
      try {
        let res = await commentToPost(this.postId, this.inputComment);
        this.openNotificationWithIcon('success','评论成功');
      } catch(e) {
        this.openNotificationWithIcon('error','评论失败');
      } finally {
        this.inputComment='';
        this.getComments();
        this.inputting = false;
      }
    },
    async onShare() {
      try {
        await sharePost(this.postId);
        this.openNotificationWithIcon('success', '分享成功')
      } catch(e) {
        this.openNotificationWithIcon('error', '分享失败')
      }
    },
    async onOk(type: string) {
      if(type === 'comment') {
        await this.reportComment(this.postId,
          this.reportInfo.commentId, this.reportInfo.reason);       
      } else {
          this.reportToPost();
      }
      this.onCancel();
    },
    onCancel() {
      this.modalVisible = false;
    },
    showModalReportComment(commentId: string) {
      this.reportInfo = {
        type: 'comment',
        commentId,
      }
      this.modalVisible = true;
    },
    showModalReportPost() {
      this.reportInfo = {
        type: 'post'
      };
      this.modalVisible = true;
    }

  }
}