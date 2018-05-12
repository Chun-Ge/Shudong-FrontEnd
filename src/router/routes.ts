// import Vue from 'vue';
// import Router from 'vue-router';
import login from '@/pages/login/login.vue';

export default  [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/',
    //   redirect: '/login',
    },
  ]
