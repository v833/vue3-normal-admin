<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-25 21:09:09
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-25 23:30:32
 * @FilePath: /code/vue3-normal-admin/src/layout/components/Sidebar/SidebarMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <el-menu :uniqueOpened="true" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <!-- 子集menu -->
    <SidebarItem v-for="item in routes" :key="item.path" :route="item"></SidebarItem>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'

const router = useRouter()
const routes = computed(() => {
  // debugger
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})

</script>

<style lang="scss" scoped>
</style>
