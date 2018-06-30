import { createPost } from '../../shared/services/post.service'
import { fetchCategories } from '../../shared/services/post.service';
import { mapMutations, mapState } from 'vuex';

declare var userInfo;

let log = console.log;

export default {
  data: () => {
    return {
      modalVisible: false,

      categories: ['a', 'b', 'c',],
      currentCategory: '',

      postTitle: '',
      postContent: '',

      loading: true,
    }
  },
  computed: {
  },
  async beforeMount() {
    await this.init();
  },
  methods: {
    async init() {
      this.loading = false;
      try {
        let res = await fetchCategories();
        this.categories = res.data.data.categoryNames;
      } catch (err) {
        log('>>> fetching categories, error:', err);
      }
    },
    openNotificationWithIcon(type: string, title: string, descrip: string) {
      this.$notification[type]({
        message: title,
        description: descrip
      })
    },

    async onOk() {
      try {
        await createPost(this.userInfo.email, this.postTitle, this.postContent);
        this.CLEARDATA();
        this.openNotificationWithIcon('success', 'post 成功');
      } catch (err) {
        this.openNotificationWithIcon('error', 'post 失败');
      }
    },

    onCancel() {
      this.modalVisible = false;
    },

    editPost() {
      this.modalVisible = true;
    }
  }
}
