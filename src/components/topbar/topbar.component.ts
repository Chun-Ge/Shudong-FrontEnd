import { mapMutations, mapState } from "vuex";
import logoutComponent from '@/components/logout/logout.component.vue'

export default {
  data: () => {
    return {
      hasMsg: false,
    }
  },
  components: { logoutComponent },
  computed: {
    ...mapState(['topbarText', 'hiddenMenu']),
  },
  methods: {
    ...mapMutations(['SET_TOPBARTEXT', 'TOGGLE_MENU', 'PULL_LEFT']),
    onPressIcon(value) {
      console.log(value)
    },
    toggleMenu() {
      this.TOGGLE_MENU()
    },
  }
}