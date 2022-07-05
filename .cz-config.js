/*
 * @Descripttion: 
 * @version: 
 * @Author: 
 * @Date: 2022-07-04 23:52:31
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-05 00:13:29
 */
module.exports = {
  // 可选类型
  type: [
		{
			value: 'feat', name: 'feat: 新功能'
		},
		{
			value: 'fix', name: 'fix: 修复'
		},
		{
			value: 'docs', name: 'docs: 文档',
		},
		{
			value: 'style', name: 'style: 样式',
		}
  ],
  message: {
    type: '请选择提交的类型: ',
    customScope: '请输入提交的范围: ',
    subject: '请简要描述提交: ',
    body: '请输入提交的内容: ',
    footer: '请输入提交的其他信息: ',
    confirmCommit: '确认提交吗? (y/n)',
  },
  subjectLimit: 72
},
