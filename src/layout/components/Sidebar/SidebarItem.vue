<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-25 23:11:02
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-30 14:34:49
 * @FilePath: /code/vue3-normal-admin/src/layout/components/Sidebar/SidebarItem.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <MenuItem :title="route.meta.title" :icon="route.meta.icon">
      </MenuItem>
    </template>
    <SidebarItem v-for="item of route.children" :key="item.path" :route="item"></SidebarItem>
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <MenuItem :title="route.meta.title" :icon="route.meta.icon">
    </MenuItem>
  </el-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
import MenuItem from './MenuItem.vue'
defineProps({
  route: {
    type: Object,
    require: true
  }
})
</script>

<style lang="scss" scoped>
</style>
