import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const requireAll = require.context('./modules', false, /\.js$/)

// 私有路由表
export const privateRoutes = []
// 公开路由表
export const publicRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    redirect: '/profile',
    name: 'Layout',
    component: Layout,
    children: [
      // 个人中心
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/profile/index.vue'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user'
        }
      },

      // 401
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401.vue')
      }
    ]
  }
]
requireAll.keys().forEach((module) => {
  const _routes = requireAll(module).default
  privateRoutes.push(_routes)
})

const router = createRouter({
  history: createWebHashHistory(),
  // routes: [...publicRoutes, ...privateRoutes]
  routes: publicRoutes
})

export default router
