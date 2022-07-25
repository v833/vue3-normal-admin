/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-04 22:54:30
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-25 22:08:20
 * @FilePath: /code/vue3-normal-admin/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
// 私有路由表]
const privateRoutes = [
  {
    path: '/user',
    component: Layout,
    redirect: 'user/manage',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'UserManage',
        component: () => import('@/views/user-manage/index.vue'),
        meta: {
          title: 'UserManage',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role',
        name: 'Role',
        component: () => import('@/views/role-list/index.vue'),
        meta: {
          title: 'roleList',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'Permission',
        component: () => import('@/views/permission-list/index.vue'),
        meta: {
          title: 'permissionList',
          icon: 'permission'
        }
      },
      {
        path: '/user/info/:id',
        name: 'UserInfo',
        component: () => import('@/views/user-info/index.vue'),
        meta: {
          title: 'userInfo'
        }
      },
      {
        path: '/user/import',
        name: 'Import',
        component: () => import('@/views/import/index.vue'),
        meta: {
          title: 'excelImport'
        }
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    redirect: '/article/ranking',
    name: 'articleRanking',
    meta: { title: 'article', icon: 'article' },
    children: [
      {
        path: '/article/ranking',
        component: () =>
          import(
          /* webpackChunkName: "article-ranking" */ '@/views/article-ranking/index'
          ),
        meta: {
          title: 'articleRanking',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/:id',
        component: () =>
          import(
          /* webpackChunkName: "article-ranking" */ '@/views/article-detail/index'
          ),
        meta: {
          title: 'articleDetail'
        }
      }
    ]
  }
]

// 公开路由表
const publicRoutes = [
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
          title: '个人中心',
          icon: 'el-icon-user'
        }
      },
      // 404
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404.vue')
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

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
