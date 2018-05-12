import Vue from 'vue';
import { routerMode } from '../config/env'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router);

export default new Router({
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