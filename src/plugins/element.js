/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-05 23:53:21
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-30 14:44:10
 * @FilePath: /code/vue3-normal-admin/src/plugins/element.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import store from '@/store'

export default (app) => {
  app.use(ElementPlus, { locale: store.getters.language === 'en' ? en : zhCn })
}
