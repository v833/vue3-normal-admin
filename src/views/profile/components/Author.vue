<template>
  <div class="author-container">
    3
  </div>
</template>

<script setup>
import PanThumb from '@/components/panThumb/index.vue'
import { } from 'vue'
</script>

<style lang="scss" scoped>
.author-container {
  .header {
    display: flex;

    .header-desc {
      margin-left: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      span {
        font-size: 14px;
      }
    }
  }

  .info {
    margin-top: 16px;
    line-height: 22px;
    font-size: 14px;
    text-indent: 26px;
  }
}
</style>
