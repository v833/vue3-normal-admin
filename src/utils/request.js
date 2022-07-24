import store from '@/store'
import axios from 'axios'
import { ElMessage } from 'element-plus'
// console.log('process.env.VUE_APP_BASE_API: ', process.env.VUE_APP_BASE_API)
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(config => {
  // 统一注入token
  if (store.getters.token) {
    config.headers.Authorization = 'Bearer ' + store.getters.token
  }
  return config
}, err => {
  return Promise.reject(new Error(err))
})

service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  if (success) {
    return data
  } else {
    ElMessage.error(message)
    return Promise.reject(new Error(message))
  }
}, err => {
  ElMessage.error(err)
  return Promise.reject(new Error(err))
})

export default service
