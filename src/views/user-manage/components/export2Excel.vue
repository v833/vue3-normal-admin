<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-08-03 23:01:59
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-08-04 00:08:19
 * @FilePath: /code/vue3-normal-admin/src/views/user-manage/components/Export2Excel.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-dialog :title="$t('msg.excel.title')" :model-value="modelValue" @close="closed" width="30%">
    <el-input v-model="excelName" :placeholder="$t('msg.excel.placeholder')"></el-input>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.excel.close') }}</el-button>
        <el-button type="primary" @click="onConfirm" :loading="loading">{{
            $t('msg.excel.confirm')
        }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { watchSwitchLang } from '@/utils/i18n'
import { USER_RELATIONS } from './Export2ExcelConstants'
import { dateFilter } from '@/filters/index'
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  tableData: {
    type: Array,
    default: () => []
  }
})
const emits = defineEmits(['update:modelValue'])

const i18n = useI18n()
const excelName = ref(i18n.t('msg.excel.defaultName'))
watchSwitchLang(() => {
  excelName.value = i18n.t('msg.excel.defaultName')
})

const loading = ref(false)

const closed = () => {
  emits('update:modelValue', false)
}

let timer
const onConfirm = async () => {
  const { exportJsonToExcel } = await import('@/utils/Export2Excel')
  const data = formatJson(USER_RELATIONS, props.tableData)
  exportJsonToExcel({
    header: Object.keys(USER_RELATIONS),
    data,
    filename: excelName.value || i18n.t('msg.excel.defaultName')
  })
  emits('update:modelValue', false)
}

const formatJson = (headers, rows) => {
  return rows.map(item => {
    return Object.keys(headers).map(key => {
      if (headers[key] === 'role') {
        const roles = item[headers[key]]
        return JSON.stringify(roles.map(item => item.title))
      }
      if (headers[key] === 'openTime') {
        const time = item[headers[key]]
        return dateFilter(time)
      }
      return item[headers[key]]
    })
  })
}

onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<style lang="scss" scoped>
</style>
