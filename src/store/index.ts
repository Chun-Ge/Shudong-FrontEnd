import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getter'

Vue.use(Vuex);

const state = {
  userInfo: {
    username: '',
    userId: ''
  },
  topbarText: '首页',
  hiddenMenu: false,
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
