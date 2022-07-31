/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-31 18:27:49
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-31 18:34:11
 * @FilePath: /code/vue3-normal-admin/src/utils/tags.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const whiteList = ['/login', '/404', '/401']

export const isTags = (path) => {
  return !whiteList.includes(path)
}
