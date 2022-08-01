<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-25 21:27:52
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-08-01 22:09:56
 * @FilePath: /code/vue3-normal-admin/src/views/profile/components/ProjectCard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  1
</template>

<script setup>
import PanThumb from '@/components/panThumb/index.vue'
import { defineProps } from 'vue'
defineProps({
  features: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.user-container {
  .text-muted {
    font-size: 14px;
    color: #777;
  }

  .user-profile {
    text-align: center;

    .user-name {
      font-weight: bold;
    }

    .box-center {
      padding-top: 10px;
    }

    .user-role {
      padding-top: 10px;
      font-weight: 400;
    }
  }

  .project-bio {
    margin-top: 20px;
    color: #606266;

    span {
      padding-left: 4px;
    }

    .project-bio-section {
      margin-bottom: 36px;

      .project-bio-section-header {
        border-bottom: 1px solid #dfe6ec;
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-weight: bold;
      }

      .project-bio-section-body {
        .progress-item {
          margin-top: 10px;

          div {
            font-size: 14px;
            margin-bottom: 2px;
          }
        }
      }
    }
  }
}
</style>
