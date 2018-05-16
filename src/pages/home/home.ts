import { retrieveRecentPosts, retrieveSpecificPost } from '../../shared/services/post.service'
import postCard from '@/components/card/card.component.vue'

export default {
  data: () => {
    return {
      posts: [],
      limitNum: 20,
      offset: 0
    }
  },
  components: {
    'post-card': postCard
   },
  async beforeMount() {
    console.log('init: ', this)
    await this.init()
  },

  methods: {
    async init() {
      await this.getPosts();
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
        // console.log(this.posts)
        try{
          const res = await retrieveSpecificPost(String(curVal.postId));
          this.posts.push(res.data.data)
        } catch(e) {
          this.openNotificationWithIcon('error', '获取posts数据失败');
        }
      });


      // console.log('simplePosts: ', simplePosts)
      // this.posts = simplePosts.map(async (curValue, index) => {
      //   const res = await retrieveSpecificPost(String(curValue.postId));
        // console.log(res)
        // console.log("res: ",res.data.data)
        // return res.data.data;
      // });
      this.offset += this.limitNum;
      // console.log(this.posts)
    }
  }
  
}