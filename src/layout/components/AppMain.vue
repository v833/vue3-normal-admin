<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-24 12:10:21
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-08-03 23:29:26
 * @FilePath: /code/vue3-normal-admin/src/views/layout/components/AppMain.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app-main">
    <!-- 带有切换动画, 并且具有缓存的router-view -->
    <router-view v-slot='{ Component, route }'>
      <transition name="fade-transform" mode="out-in">
        <!-- <keep-alive> -->
        <component :is="Component" :key='route.path' />
        <!-- </keep-alive> -->
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { isTags } from '@/utils/tags'
import { useStore } from 'vuex'
import { generateTitle, watchSwitchLang } from '@/utils/i18n'

const route = useRoute()
const store = useStore()

// 生成title
const getTitle = route => {
  let title = ''
  if (!route?.meta) {
    const pathArr = route.path.split('/')
    title = pathArr.at(-1)
  } else {
    title = generateTitle(route.meta.title)
  }
  return title
}

watchSwitchLang(() => {
  store.getters.tagsViewList.forEach((route, index) => {
    store.commit('app/changeTagsView', {
      index,
      tag: {
        ...route,
        title: getTitle(route)
      }
    })
  })
})

watch(route, (to, from) => {
  // 并不是所有的路由需要保存 404 登陆页面不需要保存
  if (!isTags(to.path)) return
  const { fullPath, meta, name, params, path, query } = to
  store.commit('app/addTagsViewList', {
    fullPath,
    meta,
    name,
    params,
    path,
    query,
    title: getTitle(to)
  })
}, {
  immediate: true
})
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 13px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
