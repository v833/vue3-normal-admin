/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-04 22:54:30
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-30 21:52:26
 * @FilePath: /code/vue3-normal-admin/src/store/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createStore } from 'vuex'
import user from './modules/user.js'
import app from './modules/app.js'
import theme from './modules/theme.js'
import getters from './getters'
export default createStore({
  modules: {
    user,
    app,
    theme
  },
  getters
})
