/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-04 22:54:30
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-09 00:51:31
 * @FilePath: /code/vue3-normal-admin/vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
