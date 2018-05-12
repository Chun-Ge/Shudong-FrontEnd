// import Vue from 'vue';
// import Router from 'vue-router';
import login from '@/pages/login/login.vue';
import  topbar from '@/components/topbar/topbar.component.vue' 

export default  [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '',
      component: topbar
    }, 
  ]
