<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-25 21:27:52
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-08-06 22:24:36
 * @FilePath: /code/vue3-normal-admin/src/views/role-list/components/DistributePermission.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-dialog :title="$t('msg.excel.roleDialogTitle')" :model-value="modelValue" @close="closed">
    <el-tree ref="treeRef" :data="permissionList" show-checkbox check-strictly node-key="id" default-expand-all
      :props="defaultProps">
    </el-tree>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="primary" @click="onConfirm">{{
            $t('msg.universal.confirm')
        }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import { permissionList } from '@/mock'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  roleId: {
    type: String,
    required: true
  }
})
const emits = defineEmits(['update:modelValue'])

// 属性结构配置
const defaultProps = {
  children: 'children',
  label: 'permissionName'
}

// tree 节点
const treeRef = ref(null)

watch(

)

/**
  确定按钮点击事件
 */
const i18n = useI18n()
const onConfirm = async () => {
  emits('update:modelValue', false)
  ElMessage.success(i18n.t('msg.role.updateRoleSuccess'))
}

/**
 * 关闭
 */
const closed = () => {
  emits('update:modelValue', false)
}
</script>

<style lang="scss" scoped>
</style>
