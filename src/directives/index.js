/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-08-06 11:57:32
 * @LastEditors: v833
 * @LastEditTime: 2022-08-07 00:29:39
 * @FilePath: /code/vue3-normal-admin/src/directives/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import print from 'vue3-print-nb'
import permission from './permission'

export default app => {
  app.use(print)
  app.directive('permission', permission)
}
