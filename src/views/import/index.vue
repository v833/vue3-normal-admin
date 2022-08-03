<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-25 21:27:52
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-08-03 22:29:10
 * @FilePath: /code/vue3-normal-admin/src/views/import/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <UploadExcel :onSuccess="onSuccess" />
  </div>
</template>

<script setup>
import UploadExcel from '@/components/uploadExcel/index.vue'
import { useRouter } from 'vue-router'
import { ref, defineEmits } from 'vue'

const excelData = ref(null)
const router = useRouter()

const emits = defineEmits(['getExcelData'])

const onSuccess = ({ results }) => {
  excelData.value = results
  emits('getExcelData', results)

  router.push('/user/manage')
}

</script>

<style lang="scss" scoped>
</style>
