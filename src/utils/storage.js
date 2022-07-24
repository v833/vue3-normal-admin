/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-24 11:01:06
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-24 11:06:25
 * @FilePath: /code/vue3-normal-admin/src/utils/storage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 存储数据
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

// 获取数据
export const getItem = (key) => {
  // let value = window.localStorage.getItem(key)
  // if (value && value.indexOf('{') === 0) {
  //   value = JSON.parse(value)
  // }
  // return value
  const _data = window.localStorage.getItem(key)
  try {
    return JSON.parse(_data)
  } catch (e) {
    return _data
  }
}

// 删除指定数据
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

// 删除所有数据
export const removeAllItem = () => {
  window.localStorage.clear()
}
