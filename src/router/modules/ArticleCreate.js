/*
 * @Description:
 * @Author: v833
 * @Date: 2022-08-06 23:09:27
 * @LastEditors: v833
 * @LastEditTime: 2022-08-07 23:27:29
 */
import layout from '@/layout'

export default {
  path: '/article',
  component: layout,
  redirect: '/article/ranking',
  name: 'articleCreate',
  meta: { title: 'article', icon: 'article' },
  children: [
    {
      path: '/article/create',
      component: () =>
        import(
          /* webpackChunkName: "article-create" */ '@/views/article-create/index'
        ),
      meta: {
        title: 'articleCreate',
        icon: 'article-create'
      }
    },
    {
      path: '/article/create/:id',
      component: () =>
        import(
          /* webpackChunkName: "article-create" */ '@/views/article-create/index'
        ),
      meta: {
        title: 'articleEditor'
      }
    }
  ]
}
