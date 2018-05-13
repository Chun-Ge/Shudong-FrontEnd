// import Vue from 'vue';
// import Router from 'vue-router';
import login from '@/pages/login/login.vue';
import  main from '@/components/main/main.component.vue' 

export default  [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '',
      component: main
    }, 
  ]
