/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-24 23:24:49
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-24 23:44:11
 * @FilePath: /code/vue3-normal-admin/src/utils/auth.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { getItem, setItem } from './storage'
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'

export const getTimeStamp = () => {
  return getItem(TIME_STAMP)
}

export const setTimeStamp = () => {
  setItem(TIME_STAMP, Date.now())
}

export const isCheckTimeout = () => {
  const currentTime = Date.now()
  const timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
