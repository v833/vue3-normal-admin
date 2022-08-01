<template>
  <el-timeline>
    <el-timeline-item v-for="item in userChapter" :key="item.id" :timestamp="item.timestamp" placement="top">
      <el-card>
        <h4>{{ item.content }}</h4>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup>
import { userChapter } from '@/mock/index.js'

</script>

<style lang="scss" scoped>
</style>
