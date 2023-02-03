import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './pages/Home.vue'
import Upload from './pages/Upload.vue'
import ColumnDetail from './pages/ColumnDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: () => import('./pages/Login.vue')
  },
  {
    path: '/upload',
    component: Upload,
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter')
      next()
    }
  },
  {
    path: '/column',
    name: 'columnDetail',
    component: ColumnDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, svaePosition) {
    return { left: 0, top: 50 }
    // return new Promise((resolve, reject) => {
    //   resolve({ left: 0, top: 50 })
    // })
  },
  routes
})

// router.beforeEach((to, from, next) => {
// if (to.path === '/upload') {
//   next({ path: '/' })
// }
//   next()
// })

export default router
