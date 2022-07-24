/*
 * @Descripttion:
 * @version:
 * @Author:
 * @Date: 2022-07-04 22:54:30
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-11 23:37:06
 */
// ESlint 配置文件遵循commonJS的导出规则, 所导出的对象就是ESlint的配置对象
module.exports = {
  // 表示当前目录即为根目录, ESlint规则限制在该目录下
  root: true,
  // 启动ESlint检测的环境
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  // 错误级别分为3种 off 或 0 关闭 / warn 或 1 警告 / error 或 2 程序退出
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 1,
    'space-before-function-paren': 'off'
  }
}
