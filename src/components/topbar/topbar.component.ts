import { mapMutations, mapState } from "vuex";
import { logout } from '../../shared/services/user.service'

declare var userInfo;

export default {
  data: () => {
    let h = this.$createElement;
    return {
      hasMsg: false,
      text: '确定要退出?',
    }
  },
  computed: {
    ...mapState(['topbarText', 'hiddenMenu', 'userInfo']),
  },
  methods: {
    ...mapMutations(['SET_TOPBARTEXT', 'TOGGLE_MENU', 'CLEARDATA']),
    onPressIcon(value) {
      console.log(value)
    },
    toggleMenu() {
      this.TOGGLE_MENU()
    },
    openNotificationWithIcon(type: string, title: string, descrip: string) {
      this.$notification[type]({
        message: title,
        description: descrip
      })
    },

    onConfirm(e) {
      logout(this.userInfo.userId).then(() => {
        this.$router.push('/login');
        this.CLEARDATA();
        this.openNotificationWithIcon('success', '登出成功')
      }).catch(() => {
        this.openNotificationWithIcon('error', '登出失败');
      })    
    }
  }
}