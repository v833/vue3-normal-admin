/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-04 22:54:30
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-08-04 00:07:30
 * @FilePath: /code/vue3-normal-admin/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import installIcons from '@/icons/index'
import '@/styles/index.scss'
import './permission.js'
import i18n from '@/i18n/index'
import installFilter from '@/filters/index'

const app = createApp(App)
installElementPlus(app)
installIcons(app)
installFilter(app)
app.use(router).use(store).use(i18n).mount('#app')
