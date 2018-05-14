import { logout } from '../../shared/services/user.service'
import { mapMutations, mapState } from "vuex";

declare var userInfo;

export default {
  data: () => {
    return {
      logoutConfirmText: '确定要退出?'
    }
  },
  computed: {
    ...mapState(['userInfo']),
  },
  methods: {
    ...mapMutations(['CLEARDATA']),
    openNotificationWithIcon(type: string, title: string, descrip: string) {
      this.$notification[type]({
        message: title,
        description: descrip
      })
    },

    async onConfirm(e) {
      try {
        await logout(this.userInfo.userId);
        this.CLEARDATA();
        this.$router.push('/login');
        this.openNotificationWithIcon('success', '登出成功');
      } catch(err) {
        // console.log(err)
        this.openNotificationWithIcon('error', '登出失败');
      }
      
    }
  }
}