// import Vue from 'vue';
// import Router from 'vue-router';
import login from '@/pages/login/login.vue';
import register from '@/pages/register/register.vue';
import home from '@/pages/home/home.vue'
import main from '@/components/main/main.component.vue' 
import discover from '@/pages/discover/discover.vue'
import topic from '@/pages/topic/topic.vue'
import App from '@/App.vue'

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
    path: '/topic',
    name: 'topic'
    // component: topic
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
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/',
      name: 'app',
      component: main,
      children

    }
    // {
    //   path: '',
    //   name: '404'
    //   component: notFound
    // }, 
  ]
