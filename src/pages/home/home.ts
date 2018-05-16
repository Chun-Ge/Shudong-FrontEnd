import { retrieveRecentPosts, retrieveSpecificPost } from '../../shared/services/post.service'
import postCard from '@/components/card/card.component.vue'

//文档高度
function getDocumentTop() {
  let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if (document.body) {
      bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

//可视窗口高度
function getWindowHeight() {
  let windowHeight = 0;
  if (document.compatMode == "CSS1Compat") {
      windowHeight = document.documentElement.clientHeight;
  } else {
      windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}

//滚动条滚动高度
function getScrollHeight() {
  let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  if (document.body) {
      bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}

export default {
  data: () => {
    return {
      posts: [],
      limitNum: 20,
      offset: 0,
      loading: false,
      noMoreData: false,

    }
  },
  components: {
    'post-card': postCard
   },
  async beforeMount() {
    // console.log('init: ', this)
    await this.init()
  },

  methods: {
    async init() {
      await this.getPosts();
      window.onscroll =  async () => {
        //监听事件内容
        console.log('document: ', getDocumentTop());
        console.log('window: ', getWindowHeight());
        console.log('Scroll: ', getScrollHeight());
        if(getDocumentTop() + getWindowHeight() ===  getScrollHeight() && !this.noMoreData){
            //当滚动条到底时,这里是触发内容
            //异步请求数据,局部刷新dom
            this.loading = true;
            try {
              await this.getPosts();
            } catch(e) {
              this.openNotificationWithIcon('error', '已经没更多数据');
              this.noMoreData = true;
            } finally {
              this.loading = false;
            }
        }
    }
    },

    openNotificationWithIcon(type: string, title: string, descrip: string) {
      this.$notification[type]({
        message: title,
        description: descrip,
      })  
    },

    async getPosts() {
      const response = await retrieveRecentPosts(this.limitNum, this.offset);
      // this.posts = response.data.data;
      const simplePosts = response.data.data;

      simplePosts.forEach(async (curVal, index) => {
        try{
          const res = await retrieveSpecificPost(String(curVal.postId));
          this.posts.push(res.data.data.post)
          this.posts.push(res.data.data.post)
          this.posts.push(res.data.data.post)
        } catch(e) {
          this.openNotificationWithIcon('error', '获取posts数据失败');
        }
      });
      this.offset += this.limitNum;
    }
  },

  
}