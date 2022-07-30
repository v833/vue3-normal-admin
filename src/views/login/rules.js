/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-11 22:10:05
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-30 16:27:46
 * @FilePath: /code/vue3-normal-admin/src/views/login/rules.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import i18n from '@/i18n'

export const validatePassword = () => {
  return (rule, value, cb) => {
    if (value.length < 6) {
      cb(new Error(i18n.global.t('msg.login.passwordRule')))
    } else {
      cb()
    }
  }
}
