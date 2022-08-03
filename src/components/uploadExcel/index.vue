<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-08-03 21:14:34
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-08-03 22:18:24
 * @FilePath: /code/vue3-normal-admin/src/components/uploadExcel/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="upload-excel">
    <div class="btn-upload">
      <el-button :loading="loading" type="primary" @click="handleUpload">
        {{ $t('msg.uploadExcel.upload') }}
      </el-button>
    </div>

    <input ref="excelUploadInput" class="excel-upload-input" type="file" accept=".xlsx, .xls" @change="handleChange" />
    <!-- https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_Drag_and_Drop_API -->
    <div class="drop" @drop.stop.prevent="handleDrop" @dragover.stop.prevent="handleDragover"
      @dragenter.stop.prevent="handleDragover">
      <i class="el-icon-upload" />
      <span>{{ $t('msg.uploadExcel.drop') }}</span>
    </div>
  </div>
</template>

<script setup>
import XLSX from 'xlsx'
import { defineProps, ref } from 'vue'
import { getHeaderRow, isExcel } from './util'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  // 上传前回调
  beforeUpload: Function,
  // 成功回调
  onSuccess: Function
})

const i18n = useI18n()
const loading = ref(false)
const excelUploadInput = ref(null)

const handleUpload = () => {
  excelUploadInput.value.click()
}

// 选中文件之后
const handleChange = (e) => {
  const file = e.target.files[0]
  if (!file) return
  // 触发上传事件
  upload(file)
}

const upload = file => {
  // debugger
  excelUploadInput.value.value = null
  props.beforeUpload && props.beforeUpload(file)
  readData(file)
}
// 读取数据
const readData = file => {
  loading.value = true
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    // 读取数据完成时触发
    reader.onload = e => {
      // 1. 获取到解析好的数据
      const data = e.target.result
      // 2. 利用XLSX解析数据
      const workbook = XLSX.read(data, { type: 'array' })
      // 3. 获取第一张表格名称
      const firstSheetName = workbook.SheetNames[0]
      // 4. 读取sheet1的数据
      const wookSheet = workbook.Sheets[firstSheetName]
      // 5. 解析表头数据
      const header = getHeaderRow(wookSheet)
      // 6. 解析数据体
      const results = XLSX.utils.sheet_to_json(wookSheet)
      // 7. 传入解析之后的数据
      generateData({ header, results })
      // 8. 处理loading
      loading.value = false
      // 9. 成功回调
      resolve()
    }
    reader.readAsArrayBuffer(file)
  })
}

const generateData = excelData => {
  props.onSuccess && props.onSuccess(excelData)
}

const handleDrop = (e) => {
  if (loading.value) return
  const files = e.dataTransfer.files
  if (files.length !== 1) {
    ElMessage.error('必须要有一个文件')
    return
  }
  if (!isExcel(files[0])) {
    ElMessage.error('必须要是excel文件')
    return
  }
  upload(files[0])
}

const handleDragover = (e) => {
  e.dataTransfer.dropEffect = 'copy'
}

</script>

<style lang="scss" scoped>
.upload-excel {
  display: flex;
  justify-content: center;
  margin-top: 100px;

  .excel-upload-input {
    display: none;
    z-index: -9999;
  }

  .btn-upload,
  .drop {
    border: 1px dashed #bbb;
    width: 350px;
    height: 160px;
    text-align: center;
    line-height: 160px;
  }

  .drop {
    line-height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #bbb;

    i {
      font-size: 60px;
      display: block;
    }
  }
}
</style>
