<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-31 11:26:19
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-31 23:54:37
 * @FilePath: /code/vue3-normal-admin/src/components/screenfull/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div @click="handleToggleClick">
    <el-tooltip :content="$t('msg.navBar.screenfull')">
      <span>
        <svg-icon :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"></svg-icon>
      </span>
    </el-tooltip>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import screenfull from 'screenfull'

const isFullscreen = ref(false)

const handleToggleClick = () => {
  // isFullscreen.value = !isFullscreen.value
  screenfull.toggle()
}
onMounted(() => {
  screenfull.on('change', () => {
    isFullscreen.value = screenfull.isFullscreen
  })
})
onUnmounted(() => {
  screenfull.off('change')
})
</script>

<style lang="scss" scoped>
</style>
