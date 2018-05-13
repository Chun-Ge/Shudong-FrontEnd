import sidebar from '@/components/sidebar/sidebar.component.vue';
import topbar from '@/components/topbar/topbar.component.vue';
import { mapState } from 'vuex';

declare var hiddenMenu;

export default {
  components: { sidebar, topbar },
  computed: {
    ...mapState(['hiddenMenu']),
  }
}