/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-09 00:12:26
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-11 22:46:31
 * @FilePath: /code/vue3-normal-admin/icons/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import SvgIcon from '@/components/svg-icon/index.vue'

const requireAll = require.content('./svg', false, /\.svg$/)

requireAll.keys().forEach(svgIcon => {
  return require(svgIcon)
})

export default app => {
  app.component('svg-icon', SvgIcon)
}
