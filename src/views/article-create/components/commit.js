/*
 * @Description:
 * @Author: v833
 * @Date: 2022-08-07 22:23:13
 * @LastEditors: v833
 * @LastEditTime: 2022-08-07 22:28:29
 */
import { ElMessage } from 'element-plus'
import i18n from '@/i18n'
const t = i18n.global.t

export const commitArticle = async data => {
  // const res = await createArticle(data)
  ElMessage.success(t('msg.article.createSuccess'))
}

export const editArticle = async data => {
  // const res = await articleEdit(data)
  ElMessage.success(t('msg.article.editorSuccess'))
}
