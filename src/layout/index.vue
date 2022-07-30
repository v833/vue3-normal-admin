<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-24 12:06:20
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-30 09:46:41
 * @FilePath: /code/vue3-normal-admin/src/views/layout/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app-wrapper">
    <!-- 左侧menu -->
    <sidebar class="sidebar-container" :style="{ 'background-color': $store.getters.cssVar.menuBg }"></sidebar>
    <div class="main-container">
      <div class="fixed-header"></div>
      <!--顶部navbar -->
      <navbar />
      <!-- 内容区 -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
import Sidebar from './components/Sidebar/index.vue'
// import variables from '@/styles/variables.module.scss'
// console.log('variables: ', variables)

</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: absolute;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  width: calc(100% - #{$sideBarWidth});
}
</style>
