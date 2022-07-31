/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-30 14:10:49
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-30 16:42:09
 * @FilePath: /code/vue3-normal-admin/src/i18n/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createI18n } from 'vue-i18n'
import store from '@/store'
import zhLocale from './lang/zh'
import enLocale from './lang/en'
const messages = {
  en: {
    msg: {
      ...enLocale
    }
  },
  zh: {
    msg: {
      ...zhLocale
    }
  }
}

function getLanguage() {
  return store?.getters?.language
}

const i18n = createI18n({
  // 使用composition API
  legacy: false,
  // 全局使用 t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n
