import { createPost } from '../../shared/services/post.service'
import { mapMutations, mapState } from "vuex";

declare var userInfo;

export default {
  data: () => {
    return {
      modalVisible: false,

      currentTopic: '',
      topics: [],

      postTitle: '',
      postContent: '',

      loading: true,
    }
  },
  computed: {
  },
  methods: {
    openNotificationWithIcon(type: string, title: string, descrip: string) {
      this.$notification[type]({
        message: title,
        description: descrip
      })
    },

    async onOk() {
      try {
        await createPost(this.userInfo.username, this.postTitle, this.postContent);
        this.CLEARDATA();
        this.openNotificationWithIcon('success', 'post 成功');
      } catch(err) {
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
