/*
 * @Description: 动态列表
 * @Author: v833
 * @Date: 2022-07-25 21:27:52
 * @LastEditors: v833
 * @LastEditTime: 2022-08-07 11:32:37
 */
import DynamicData from './DynamicData.js'
import { ref, watch } from 'vue'
import { watchSwitchLang } from '@/utils/i18n'

// 暴露出动态的列数据
export const dynamicData = ref(DynamicData())

// 创建 被勾选的动态列数据
export const selectDynamicLabel = ref([])

// 默认全部勾选
export const initSelectDynamicLabel = () => {
  selectDynamicLabel.value = dynamicData.value.map(item => item.label)
}
initSelectDynamicLabel()
// 监听语言切换
watchSwitchLang(() => {
  dynamicData.value = DynamicData()
  initSelectDynamicLabel()
})

// table列数据
export const tableColumns = ref([])
watch(selectDynamicLabel, val => {
  tableColumns.value = []
  const selectData = dynamicData.value.filter(item => {
    return val.includes(item.label)
  })
  tableColumns.value.push(...selectData)
}, { immediate: true })
