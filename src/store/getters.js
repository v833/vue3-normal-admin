/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-24 11:42:14
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-30 15:11:09
 * @FilePath: /code/vue3-normal-admin/src/store/getters.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import variables from '@/styles/variables.module.scss'
// 快捷访问
const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  hasUserInfo: state => !!Reflect.ownKeys(state.user.userInfo).length,
  cssVar: state => variables,
  sidebarOpened: state => state.app.sidebarOpened,
  language: state => state.app.language
}

export default getters
