/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-11 22:53:56
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-11 23:51:09
 * @FilePath: /code/vue3-normal-admin/src/store/modules/user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { login } from '@/api/sys.js'
import md5 from 'md5'
export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    login(context, userInfo) {
      const {
        userName,
        password
      } = userInfo

      return new Promise((resolve, reject) => {
        login({ userName, password: md5(password) })
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
