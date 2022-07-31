<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-31 11:38:41
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-31 11:50:57
 * @FilePath: /code/vue3-normal-admin/src/components/headerSearch/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="header-search" :class="{ show: isShow }">
    <svg-icon class-name="search-icon" icon="search" @click.stop="handleShowClick"></svg-icon>
    <el-select ref="headerSearchSelectRef" class="header-search-select" v-model="search"></el-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isShow = ref(false)

const search = ref('')

const handleShowClick = () => {

}
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;

  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
