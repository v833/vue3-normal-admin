/*
 * @Description: 全局filter
 * @Author: v833
 * @Date: 2022-08-01 23:56:39
 * @LastEditors: v833
 * @LastEditTime: 2022-08-07 01:12:57
 */

import dayjs from 'dayjs'
import rt from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import store from '@/store'

export const dateFilter = (val, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseInt(val)
  }
  return dayjs(val).format(format)
}
dayjs.extend(rt)
function relativeTime(value) {
  if (!isNaN(value)) {
    value = parseInt(value)
  }
  return dayjs().locale(store.getters.language === 'zh' ? 'zh-cn' : 'en').to(dayjs(value))
}

export default app => {
  app.config.globalProperties.$filters = {
    dateFilter,
    relativeTime
  }
}
