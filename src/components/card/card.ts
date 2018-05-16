import { retrieveComments,
  toggleLikeComment,
  commentToPost,
  ReportComment } from '../../shared/services/comment.service'
import { toggleLikePost,
  toggleStarPost,
  reportPost } from '../../shared/services/post.service'

declare var postId;
export default {
  data: () => {
    return {
      postId: 'pa1b2c3d4',
      author: '王寶寶',
      title: '美國制裁中興',
      content: '中兴案，其实合规细节没那么重要 - 目前看违规事实没有争议。所以，美国政府的处罚级别才重要。对于美国政府的各种要求，中兴这种背景的中国企业，有各种违规，其实是双方心知肚明的事情 - 中国的死敌当中，又有多少美国企业提供技术和设备呢？中兴违反了美国政府的游戏规则无疑，就像中国政府做出口合规，也一定能抓住违反规则的美国企业一样。处罚，为了政府信用也必须落实。但是，对此，到底是寻求一个双方可接受的妥协，还是要往死里掐？这次的威胁，是核弹级别的。.美国是全球化的受益者。而且，可能仍然是最大的受益者。借助一个负责任，开放和全球化的美国，让全球都可以放心的使用一些来自美国的底层技术架构。全球 IT 基础解决方案，很多都来自硅谷。这种架构让美国的硅谷占据了整个 IT 产业链的顶端。最大化了硅谷可能获得的市场。同时，提升了全球技术创新的效率。多赢',
      likeCountPost: 9,
      commentCount: 2,

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

  // props: {
  //   postId: String,
  //   author: String,
  //   title: {
  //     type: String,
  //     default: '杂谈'
  //   },
  //   content: {
  //     type: String,
  //     required: true
  //   },
  //   likeCountPost: Number,
  //   commentCount: Number

  // },
  methods: {
    async init() {
      await this.getComments();
      this.loading = false;
    },
    async getComments() {
      try {
        // console.log(this.comments);
        let res = await retrieveComments(this.postId);
        this.comments = res.data.data.comments;
      } catch(err) {
        console.log(err)
        this.openNotificationWithIcon('error','獲取评论失敗');
      }
    },
    openNotificationWithIcon(type: string, title: string, descrip: string) {
      this.$notification[type]({
        message: title,
        description: descrip,
      })
      
    },
    async onStar() {
      try {
        await toggleStarPost(this.postId)
        this.openNotificationWithIcon('success', '關注成功')
      } catch(e) {
        this.openNotificationWithIcon('error', '關注失敗')
      }
    },
    onIgnore() {
      this.openNotificationWithIcon('info', '此功能日後再說');
    },
    async onReportToPost() {
      try {
        await reportPost(this.postId, this.reason);
        this.openNotificationWithIcon('success', '舉報成功，請等待');
      } catch(e) {
        this.openNotificationWithIcon('error', '舉報失敗');
      }
    },
    async toggleLikePost() {
      try {
        let res = await toggleLikePost(this.postId);
        this.currentUserLikePost = res.data.data.currentUserLike;
        this.likeCountPost = res.data.data.currentLikeCount;
        if(res.data.data.currentUserLike) {
          this.openNotificationWithIcon('success', '點贊成功');
        } else {
          this.openNotificationWithIcon('success', '取消点赞成功');
        }
        // this.openNotificationWithIcon('success', '點贊／取贊成功');
      } catch(e) {
        this.openNotificationWithIcon('error', '操作失敗');
      }
    },
    async onReportToComment(commentId: string, reason: string = 'no reason') {
      try {
        await ReportComment(this.postId, commentId,reason);
        this.openNotificationWithIcon('success', '舉報成功');
      } catch(e) {
        this.openNotificationWithIcon('error', '舉報失敗');
      }
    },
    async toggleLikeComment(commentId: string) {
      try {
        let res = await toggleLikeComment(this.postId, commentId);
        if(res.data.data.currentUserLike) {
          this.openNotificationWithIcon('success', '點贊成功');
        } else {
          this.openNotificationWithIcon('success', '取消点赞成功');
        }
      } catch(e) {
        this.openNotificationWithIcon('error', '操作失敗');
      }
    },
    async onComment() {
      try {
        let res = await commentToPost(this.postId, this.inputComment);
        this.openNotificationWithIcon('success','评论成功');
      } catch(e) {
        this.openNotificationWithIcon('error','评论失敗');
      } finally {
        this.getComments();
      }
    },
  }
}