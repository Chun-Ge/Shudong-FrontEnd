import Vue from 'vue';
import { routerMode } from '../config/env'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(Router);

const router =  new Router({
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
      if(!store.getters.isAuthenticated) {
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          });
          return;
      }
      
  }
  next();
})

export default router;