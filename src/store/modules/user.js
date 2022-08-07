/*
 * @Description:
 * @Author: v833
 * @Date: 2022-07-11 22:53:56
 * @LastEditors: v833
 * @LastEditTime: 2022-08-07 11:22:00
 */

// import { login } from '@/api/sys.js'
import { TOKEN } from '@/constant'
import { getItem, removeAllItem, setItem } from '@/utils/storage'
import { ElMessage } from 'element-plus'
import { userInfo as _userInfo } from '@/mock/index'
import router, { resetRouter } from '@/router'
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
      // resetRouter()
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
