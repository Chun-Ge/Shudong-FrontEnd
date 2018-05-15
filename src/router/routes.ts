// import Vue from 'vue';
// import Router from 'vue-router';
import login from '@/pages/login/login.vue';
import register from '@/pages/register/register.vue';
import home from '@/pages/home/home.vue';
import discover from '@/pages/discover/discover.vue';
import topic from '@/pages/topic/topic.vue';
import App from '@/App.vue';
import store from '../store';
import card from '@/components/card/card.vue';

const children = [
  {
    path: '',
    name: 'home',
    component: home
  },
  {
    path: '/home',
    redirect: '/'
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
      meta: { auth: false }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: { auth: false }
    },
    {
      path: '/',
      component: App,
      meta: { auth: true },
      children,
    }
  ]
