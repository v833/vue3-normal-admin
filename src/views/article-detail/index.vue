<!--
 * @Description:
 * @Author: v833
 * @Date: 2022-07-25 21:27:52
 * @LastEditors: v833
 * @LastEditTime: 2022-08-07 23:27:52
-->
<template>
  <div class="article-detail-container">
    <h2 class="title">{{ articleDetail.title }}</h2>
    <div class="header">
      <span class="author">{{ $t('msg.article.author') }}：{{ articleDetail.author }}</span>
      <span class="time">{{ $t('msg.article.publicDate') }}：{{
          $filters.relativeTime(articleDetail.publicDate)
      }}</span>
      <el-button type="text" class="edit" @click="onEditClick">{{
          $t('msg.article.edit')
      }}</el-button>
    </div>
    <div class="content" v-html="articleDetail.content"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { articleDetail } from '@/mock'

// 获取数据
const route = useRoute()
const articleId = route.params.id
// 编辑
const router = useRouter()
const onEditClick = () => {
  router.push(`/article/create/${articleId}`)
}
</script>

<style lang="scss" scoped>
.article-detail-container {
  .title {
    font-size: 22px;
    text-align: center;
    padding: 12px 0;
  }

  .header {
    padding: 26px 0;

    .author {
      font-size: 14px;
      color: #555666;
      margin-right: 20px;
    }

    .time {
      font-size: 14px;
      color: #999aaa;
      margin-right: 20px;
    }

    .edit {
      float: right;
    }
  }

  .content {
    font-size: 14px;
    padding: 20px 0;
    border-top: 1px solid #d4d4d4;
  }
}
</style>
