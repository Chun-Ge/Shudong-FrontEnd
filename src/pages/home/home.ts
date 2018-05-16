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
        try{
          const res = await retrieveSpecificPost(String(curVal.postId));
          this.posts.push(res.data.data.post)
          this.posts.push(res.data.data.post)
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

  async pullDownRefresh() {

  }
  
}