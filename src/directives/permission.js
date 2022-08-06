/*
 * @Description:
 * @Author: v833
 * @Date: 2022-08-07 00:16:43
 * @LastEditors: v833
 * @LastEditTime: 2022-08-07 00:33:40
 */
import store from '@/store'

function checkPermission(el, binding, vnode) {
  const { value } = binding
  const points = store.getters.userInfo.permission.points

  if (value && Array.isArray(value)) {
    const hasPermission = points.some(point => {
      return value.includes(point)
    })

    if (!hasPermission) {
      el.parentNode.removeChild(el)
    }
  } else {
    throw new Error('checkPermission: value must be an array')
  }
}

export default {
  // 绑定元素的父组件被挂载之后
  mounted(el, binding) {
    checkPermission(el, binding)
  },

  updated(el, binding) {
    checkPermission(el, binding)
  }
}
