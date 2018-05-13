  import { mapMutations, mapState } from 'vuex'
import index from '../../store';
export default {
    methods: {
      ...mapMutations(['SET_TOPBARTEXT']),
      onSelect(item, selectedIndex) {
        const indexMap = ['首页', '发现', '话题', '用户', '设置'];
        this.SET_TOPBARTEXT(indexMap[item]);
      }
    }
  }