<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-25 21:27:52
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-08-06 12:26:20
 * @FilePath: /code/vue3-normal-admin/src/views/role-list/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-card>
      <el-table :data="roleList" border style="width: 100%">
        <el-table-column :label="$t('msg.role.index')" type="index" width="120">
        </el-table-column>
        <el-table-column :label="$t('msg.role.name')" prop="title">
        </el-table-column>
        <el-table-column :label="$t('msg.role.desc')" prop="describe">
        </el-table-column>
        <el-table-column :label="$t('msg.role.action')" prop="action" width="260" #default="{ row }">
          <!-- v-permission="['distributePermission']" -->
          <el-button type="primary" size="mini" @click="onDistributePermissionClick(row)">
            {{ $t('msg.role.assignPermissions') }}
          </el-button>
        </el-table-column>
      </el-table>
    </el-card>
    <distribute-permission v-model="distributePermissionVisible" :roleId="selectRoleId"></distribute-permission>
  </div>
</template>

<script setup>
import DistributePermission from './components/DistributePermission.vue'
import { roleList } from '@/mock'
import { ref } from 'vue'

const distributePermissionVisible = ref(false)
const selectRoleId = ref('')

const onDistributePermissionClick = ({ id }) => {
  distributePermissionVisible.value = true
  selectRoleId.value = id
}
</script>

<style lang="scss" scoped>
</style>
