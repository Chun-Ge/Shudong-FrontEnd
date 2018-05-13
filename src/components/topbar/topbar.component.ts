import { mapMutations, mapState } from "vuex";

export default {
  data: () => {
    return {
      // curPageContent: '',
      // canPullLeft: true,
      hasMsg: false
    }
  },
  // created: () => {
  //   this.curPageContent = this.$store.state.topbarContent;
  // }
  computed: {
    ...mapState(['topbarText', 'hideMenu']),
  },
  methods: {
    ...mapMutations(['SET_TOPBARTEXT', 'TOGGLE_MENU']),
    onPressIcon(value) {
      console.log(value)
    },
    toggleMenu() {
      this.TOGGLE_MENU()
    }
  }
}