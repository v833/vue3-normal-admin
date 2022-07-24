/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-24 11:32:51
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-24 11:50:32
 * @FilePath: /code/vue3-normal-admin/src/permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 处理路由守卫

// 路由前置守卫

import router from '@/router'
import store from './store'

// 白名单
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
