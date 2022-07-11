/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-08 23:39:10
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-08 23:40:04
 * @FilePath: /code/vue3-normal-admin/src/utils/validate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置
 */

// 判断是否为外部资源
export const isExternal = (path) => {
  return /^(https?:|mailto:|tel:)/.test(path)
}
