<template>
  <div class="article-ranking-container">
    <el-card class="header">
      <div class="dynamic-box">
        <span class="title">{{ $t('msg.article.dynamicTitle') }}</span>
        <el-checkbox-group v-model="selectDynamicLabel">
          <el-checkbox v-for="(item, index) in dynamicData" :label="item.label" :key="index">{{ item.label }}
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </el-card>
    <el-card>
      <el-table ref="tableRef" :data="tableData" border>
        <el-table-column v-for="(item, index) in tableColumns" :key="index" :prop="item.prop" :label="item.label">
          <template #default="{ row }" v-if="item.prop === 'publicDate'">
            {{ $filters.relativeTime(row.publicDate) }}
          </template>
          <template #default="{ row }" v-else-if="item.prop === 'action'">
            <el-button type="primary" size="mini" @click="onShowClick(row)">{{
              $t('msg.article.show')
              }}</el-button>
            <el-button type="danger" size="mini" @click="onRemoveClick(row)">{{
              $t('msg.article.remove')
              }}</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="page" :page-sizes="[5, 10, 50, 100, 200]" :page-size="size"
        layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onActivated, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import { articleList } from '@/mock'
import { dynamicData, tableColumns, selectDynamicLabel } from './dynamic/index'
import { tableRef, initSortable } from './sortable'

// 数据相关
const tableData = ref([])
const total = ref(0)
const page = ref(1)
const size = ref(10)

// 获取数据的方法
const getListData = () => {
  tableData.value = articleList.list
  total.value = articleList.total
}

// 表格拖拽相关
onMounted(() => {
  getListData()
  initSortable(tableData)
})

/**
 * size 改变触发
 */
const handleSizeChange = currentSize => {
  size.value = currentSize
}

/**
 * 页码改变触发
 */
const handleCurrentChange = currentPage => {
  page.value = currentPage
}

/**
 * 查看按钮点击事件
 */
const router = useRouter()
const onShowClick = row => {
  router.push(`/article/${row._id}`)
}

// 删除用户
const i18n = useI18n()
const onRemoveClick = row => {
  ElMessageBox.confirm(
    i18n.t('msg.article.dialogTitle1') +
    row.title +
    i18n.t('msg.article.dialogTitle2'),
    {
      type: 'warning'
    }
  ).then(async () => {
    ElMessage.success(i18n.t('msg.article.removeSuccess'))
    // 重新渲染数据
    getListData()
  })
}
</script>

<style lang="scss" scoped>
.article-ranking-container {
  .header {
    margin-bottom: 20px;

    .dynamic-box {
      display: flex;
      align-items: center;

      .title {
        margin-right: 20px;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }

  ::v-deep .el-table__row {
    cursor: pointer;
  }

  .pagination {
    margin-top: 20px;
    text-align: center;
  }
}

::v-deep .sortable-ghost {
  opacity: 0.6;
  color: #fff !important;
  background: #304156 !important;
}
</style>
