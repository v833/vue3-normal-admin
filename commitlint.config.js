/*
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-05 22:46:21
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-05 22:58:11
 * @FilePath: /code/vue3-normal-admin/commitlint.config.js
 */

// 编码格式需要为 utf-8
module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    // git 提交的type必须是指定的类型
    'type-enum': [
      // 当前验证的错误级别
      2,
      // 在什么情况下进行验证
      'always',
      // 泛型内容
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf'
      ]
    ],
    // subject 大小写不做检验
    'subject-case': [0]
  }
}
