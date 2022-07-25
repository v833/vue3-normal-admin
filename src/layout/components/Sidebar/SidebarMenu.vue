<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-25 21:09:09
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-25 21:28:03
 * @FilePath: /code/vue3-normal-admin/src/layout/components/Sidebar/SidebarMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-menu :uniqueOpened="true" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <!-- 子集menu -->
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>消息</span>
      </template>
      <el-menu-item index="1-1">消息一</el-menu-item>
      <el-menu-item index="1-2">消息二</el-menu-item>
      <el-menu-item index="1-3">消息三</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template #title>
        <i class="el-icon-setting"></i>
        <span>设置</span>
      </template>
      <el-menu-item index="2-1">设置一</el-menu-item>
      <el-menu-item index="2-2">设置二</el-menu-item>
      <el-menu-item index="2-3">设置三</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>
