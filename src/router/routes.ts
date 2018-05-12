// import Vue from 'vue';
// import Router from 'vue-router';
import login from '@/pages/login/login.vue';

export default  [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
  ]
