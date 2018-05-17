import sidebarComponent from '@/components/sidebar/sidebar.component.vue';
import topbarComponent from '@/components/topbar/topbar.component.vue';
import { mapState, mapMutations } from 'vuex';

declare var hiddenMenu;
export default {
  components: { sidebarComponent, topbarComponent },
  computed: {
    ...mapState(['hiddenMenu']),
  }
}