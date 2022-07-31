<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-30 10:08:22
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-31 23:42:08
 * @FilePath: /code/vue3-normal-admin/src/components/hamburger/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="hanburger-container" @click="handleToggleClick">
    <svg-icon class="hamburger" :icon="icon"></svg-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const icon = computed(() => {
  return store.getters.sidebarOpened ? 'hamburger-opened' : 'hamburger-closed'
})
const handleToggleClick = () => {
  store.commit('app/triggerSidebarOpened')
}
</script>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;

  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
