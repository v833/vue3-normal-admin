<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-30 12:26:19
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-30 13:25:40
 * @FilePath: /code/vue3-normal-admin/src/components/breadcrumb/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbData" :key="item.path">
      <!-- 不可点击 -->
      <span v-if="index === breadcrumbData.length - 1" class="no-redirect">
        {{ item.meta.title }}
      </span>
      <!-- 可点击 -->
      <a v-else class="redirect" @click="handleLinkClick(item)">
        {{ item.meta.title }}
      </a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const route = useRoute()
const router = useRouter()
const store = useStore()

const linkHoverColor = ref(store.getters.cssVar.menuBg)

const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  breadcrumbData.value = route.matched.filter(item => item.meta?.title)
}

watch(route, () => {
  getBreadcrumbData()
}, {
  immediate: true
})

const handleLinkClick = (item) => {
  router.push(item.path)
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }

  .redirect {
    color: #666;
    font-weight: 600;
    cursor: pointer;
  }

  .redirect:hover {
    // 将来需要进行主题替换，所以这里不去写死样式
    color: v-bind(linkHoverColor);
  }
}
</style>
