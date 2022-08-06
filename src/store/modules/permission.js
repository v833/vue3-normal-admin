/*
 * @Description:
 * @Author: v833
 * @Date: 2022-08-06 23:00:58
 * @LastEditors: v833
 * @LastEditTime: 2022-08-07 00:02:56
 */
import { publicRoutes, privateRoutes } from '@/router'
// import { setItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: () => ({
    // 路由表, 初始时的路由表
    routes: []
  }),
  mutations: {
    setRoutes(state, routes) {
      state.routes = [...publicRoutes, ...routes]
    }
  },
  actions: {
    filterRoutes(context, menus) {
      const routes = []
      menus.forEach(key => {
        routes.push(...privateRoutes.filter(item => item.name === key))
      })
      routes.push(
        // 404
        {
          path: '/:catchAll(.*)',
          name: '404',
          component: () => import('@/views/error-page/404.vue')
        }
      )
      context.commit('setRoutes', routes)
      return routes
    }
  }

}
