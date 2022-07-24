
// import { login } from '@/api/sys.js'
import { TOKEN } from '@/constant'
import { getItem, setItem } from '@/utils/storage'
import { ElMessage } from 'element-plus'
import { userInfo } from '@/mock/index'
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
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
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
        this.commit('user/setUserInfo', userInfo)
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
