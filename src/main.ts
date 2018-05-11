// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import App from './App.vue';
import App from './pages/login/login.vue';
import { routerMode } from './config/env'
import routes from './router';
import Router from 'vue-router'
// import axios from 'axios'
import Antv from 'antv'
import 'antv/dist/antv.css'

Vue.use(Antv)
Vue.use(Router);

Vue.config.productionTip = false;
// Vue.prototype.$axios = axios;

const router = new Router({
  routes,
  mode: routerMode,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
  } else {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
      return { x: 0, y:  0 }
  }
}

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
