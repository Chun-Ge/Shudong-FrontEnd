// import Vue from 'vue';
// import Router from 'vue-router';
import login from '@/pages/login/login.vue';
import home from '@/pages/home/home.vue'
import main from '@/components/main/main.component.vue' 
import discover from '@/pages/discover/discover.vue'
import plate from '@/pages/plate/plate.vue'

const children = [
  {
    path: '',
    name: 'home',
    component: home
  },
  {
    path: '/discover',
    name: 'discover',
    component: discover
  }, 
  {
    path: '/plate',
    name: 'plate'
    // component: plate
  },
  {
    path: 'profile',
    name: 'profile'
  },
  {
    path: 'setting',
    name: 'setting'
  }
]

export default  [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/',
      name: 'main',
      component: main,
      children

    }
    // {
    //   path: '',
    //   name: '404'
    //   component: notFound
    // }, 
  ]
