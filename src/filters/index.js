/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-08-01 23:56:39
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-08-04 00:06:13
 * @FilePath: /code/vue3-normal-admin/src/filter/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import dayjs from 'dayjs'

export const dateFilter = (val, format = 'YYYY-MM-DD') => {
  if (!isNaN(val)) {
    val = parseInt(val)
  }
  return dayjs(val).format(format)
}

export default app => {
  app.config.globalProperties.$filters = {
    dateFilter
  }
}
