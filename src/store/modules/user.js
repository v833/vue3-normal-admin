
import { login } from '@/api/sys.js'
import { TOKEN } from '@/constant'
import { getItem, setItem } from '@/utils/storage'
import md5 from 'md5'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    login(context, userInfo) {
      const {
        userName,
        password
      } = userInfo

      return new Promise((resolve, reject) => {
        login({ userName, password: md5(password) })
          .then(res => {
            this.commit('user/setToken', res.data.token)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}
