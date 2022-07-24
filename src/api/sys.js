/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-11 22:50:14
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-11 22:52:34
 * @FilePath: /code/vue3-normal-admin/src/api/sys.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 登陆 return promise

import request from '@/utils/request.js'

export const login = data => {
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
