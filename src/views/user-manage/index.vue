
<template>
  <div class="user-manage-container">
    <el-card class="header">
      <div>
        <el-button type="primary" @click="handleImportClick">{{ $t('msg.excel.importExcel') }}</el-button>
        <el-button type="success" @click="handleExportClick">{{ $t('msg.excel.exportExcel') }}</el-button>
      </div>
    </el-card>

    <!-- table -->
    <el-card>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column label="#" type="index" />
        <el-table-column prop="username" :label="$t('msg.excel.name')">
        </el-table-column>
        <el-table-column prop="mobile" :label="$t('msg.excel.mobile')">
        </el-table-column>
        <el-table-column :label="$t('msg.excel.avatar')" align="center">
          <template v-slot="{ row }">
            <el-image class="avatar" :src="row.avatar" :preview-src-list="[row.avatar]"></el-image>
          </template>
        </el-table-column>
        <el-table-column :label="$t('msg.excel.role')">
          <template #default="{ row }">
            <div v-if="row.role && row.role.length > 0">
              <el-tag v-for="item in row.role" :key="item.id" size="mini">{{
                  item.title
              }}</el-tag>
            </div>
            <div v-else>
              <el-tag size="mini">{{ $t('msg.excel.defaultRole') }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column :label="$t('msg.excel.openTime')">
          <template #default="{ row }">
            {{ $filters.dateFilter(row.openTime) }}
          </template>
        </el-table-column>
        <el-table-column :label="$t('msg.excel.action')" fixed="right" width="260">
          <template #default="{ row }">
            <el-button type="primary" size="mini" @click="onShowClick(row._id)">{{ $t('msg.excel.show') }}</el-button>
            <!-- v-permission="['distributeRole']" -->
            <el-button type="info" size="mini" @click="onShowRoleClick(row)">{{
                $t('msg.excel.showRole')
            }}</el-button>
            <!-- v-permission="['removeUser']" -->
            <el-button type="danger" size="mini" @click="onRemoveClick(row)">{{
                $t('msg.excel.remove')
            }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="page" :page-size="size" :page-sizes="[2, 5, 10, 20]" layout="total,sizes,prev,pager,next,jumper"
        :total="total"></el-pagination>
    </el-card>
    <export2-excel v-model="visible" :tableData="tableData"></export2-excel>
  </div>
</template>

<script setup>
import Export2Excel from './components/export2Excel.vue'
import { userList } from '@/mock/index.js'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const i18n = useI18n()

// 数据相关
const tableData = ref([])
const total = ref(0)
const page = ref(1)
const size = ref(2)
const visible = ref(false)

// 获取数据的方法
const getListData = () => {
  tableData.value = userList.list
  page.value = +userList.page
  size.value = +userList.size
  total.value = +userList.total
}
onMounted(() => {
  getListData()
})

const handleSizeChange = (size) => {
  // size.value = size
  // getListData()
}
const handleCurrentChange = (page) => {
  // page.value = page
  // getListData()
}

// 操作方法
const onShowClick = (id) => {
  router.push('/user/info/' + id)
}
const onShowRoleClick = () => { }
const onRemoveClick = (row) => {
  ElMessageBox.confirm(i18n.t('msg.excel.dialogTitle1') + row.username + i18n.t('msg.excel.dialogTitle2'), {
    type: 'warning'
  }).then(() => {
    tableData.value.length--
    ElMessage.success(i18n.t('msg.excel.removeSuccess'))
  })
}

// excel
const handleImportClick = () => {
  router.push('/user/import')
}
const handleExportClick = () => {
  visible.value = true
}
</script>

<style lang="scss" scoped>
.user-manage-container {
  .header {
    margin-bottom: 22px;
    text-align: right;
  }

  ::v-deep .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  ::v-deep .el-tag {
    margin-right: 6px;
  }

  .pagination {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
