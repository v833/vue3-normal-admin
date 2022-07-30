<template>
  <div>
    <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
    <svg-icon v-else :icon="icon"></svg-icon>
    <span>{{ generateTitle(title) }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { generateTitle } from '@/utils/i18n'
defineProps({
  title: {
    type: String,
    require: true
  },
  icon: {
    type: String,
    require: true
  }
})
</script>

<style lang="scss" scoped>
</style>
