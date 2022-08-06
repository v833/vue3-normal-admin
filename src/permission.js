/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-24 11:32:51
 * @LastEditors: v833
 * @LastEditTime: 2022-08-07 00:04:21
 * @FilePath: /code/vue3-normal-admin/src/permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 处理路由守卫

// 路由前置守卫

import router from '@/router'
import { ElMessage } from 'element-plus'
import { userInfo } from './mock'
import store from './store'
import { isCheckTimeout } from './utils/auth'

// 白名单
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (token) {
    if (isCheckTimeout()) {
      store.commit('user/logout')
      ElMessage.error('token失效!')
      return
    }
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断用户资料是否存在, 如果不存在,获取用户信息
      if (!store.getters.hasUserInfo) {
        store.commit('user/setUserInfo', userInfo)
        const filterRoutes = await store.dispatch('permission/filterRoutes', userInfo.permission.menus)
        filterRoutes.forEach(item => {
          router.addRoute(item)
        })
        // 添加完动态路由之后, 需要进行一个主动跳转
        return next(to.path)
      }
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
