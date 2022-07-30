/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-11 22:53:56
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-30 09:59:08
 * @FilePath: /code/vue3-normal-admin/src/store/modules/user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// import { login } from '@/api/sys.js'
import { TOKEN } from '@/constant'
import { getItem, removeAllItem, setItem } from '@/utils/storage'
import { ElMessage } from 'element-plus'
import { userInfo as _userInfo } from '@/mock/index'
import router from '@/router'
import { setTimeStamp } from '@/utils/auth'
// import md5 from 'md5'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
      setTimeStamp()
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    logout() {
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  },
  actions: {
    login(context, userInfo) {
      const {
        userName,
        password
      } = userInfo

      if (userName === 'super-admin' && password === '123456') {
        this.commit('user/setToken', 'super-admin')
        this.commit('user/setUserInfo', _userInfo)
      } else {
        ElMessage.error('用户名或密码错误!')
      }
      // return new Promise((resolve, reject) => {
      //   login({ userName, password: md5(password) })
      //     .then(res => {
      //       this.commit('user/setToken', res.data.token)
      //       resolve(res)
      //     })
      //     .catch(err => {
      //       reject(err)
      //     })
      // })
    }
  }
}
