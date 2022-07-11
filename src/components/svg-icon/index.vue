<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-08 23:31:19
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-09 00:05:23
 * @FilePath: /code/vue3-normal-admin/src/components/svg-icon/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 展示外部图标 -->
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-extrenal-icon svg-icon" :class="className">

  </div>
  <!-- 展示内部图标 -->
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>

</template>
<script setup>
import { defineProps, computed } from 'vue'
import { isExternal as external } from '@/utils/validate.js'
const props = defineProps({
  // icon 图标
  icon: {
    type: String,
    required: true
  },
  // 图标类名
  className: {
    type: String,
    default: ''
  }
})

// 判断当前图标是否为外部图标
const isExternal = computed(() => external(props.icon))
// 外部图标样式
const styleExternalIcon = computed(() => ({
  mask: `url(${props.icon}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
}))
// 处理内部图标
const iconName = computed(() => `#icon-${props.icon}`)
</script>
<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
