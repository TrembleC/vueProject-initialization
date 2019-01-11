import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/layouts/'),
      children: [
        {
          path: '/',
          name: '首页',
          component: () => import('@/pages/home'),
          meta: {index: '1-1'}
        }
      ]
    }
  ]
})

export default router
