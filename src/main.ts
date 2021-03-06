// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import App from './App.vue';
import App from './App.vue';
import router  from './router';
import store from './store'
import Antv from 'antv'
import 'antv/dist/antv.css'

Vue.use(Antv);

Vue.config.productionTip = false;
// Vue.prototype.$axios = axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store

});
