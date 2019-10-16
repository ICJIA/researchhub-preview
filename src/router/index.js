import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

Vue.use(Router)

const router = new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home')
    },
    {
      path: '/apps/:slug',
      component: () => import('@/views/Apps')
    },
    {
      path: '/articles/:slug',
      component: () => import('@/views/Articles')
    },
    {
      path: '/datasets/:slug',
      component: () => import('@/views/Datasets')
    },
    {
      path: '/page-not-found',
      name: '404',
      component: () => import('@/views/404')
    },
    {
      path: '*',
      redirect: { name: '404' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
