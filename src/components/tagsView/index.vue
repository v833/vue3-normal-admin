<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-31 18:42:44
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-31 22:54:49
 * @FilePath: /code/vue3-normal-admin/src/components/tagsView/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="tags-view-container">
    <el-scrollbar class="tags-view-wrapper">
      <router-link v-for="(tag, index) in $store.getters.tagsViewList" :key="tag.fullPath" class="tags-view-item"
        :class="isActive(tag) ? 'active' : ''" :to="{ path: tag.fullPath }"
        :style="{ backgroundColor: isActive(tag) ? $store.getters.cssVar.menuBg : '', borderColor: isActive(tag) ? $store.getters.cssVar.menuBg : '' }"
        @contextmenu.prevent="openMenu($event, index)">
        {{ tag.title }}
        <i v-show="!isActive(tag)" class="el-icon-close" @click.prevent.stop="onCloseClick(index)"></i>
      </router-link>
    </el-scrollbar>
    <context-menu v-show="visible" :style="menuStyle" :index="contextIndex"></context-menu>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ContextMenu from './contextMenu.vue'

const route = useRoute()

// 是否被选中
const isActive = tag => {
  return tag.path === route.path
}

const store = useStore()
const onCloseClick = index => {
  store.commit('app/removeTagsView', {
    type: 'index',
    index
  })
}

// 鼠标右键
const visible = ref(false)
const contextIndex = ref(0)
const menuStyle = ref({
  left: 0,
  top: 0
})
const openMenu = (e, index) => {
  const { x, y } = e
  menuStyle.value.left = x + 'px'
  menuStyle.value.top = y + 'px'
  contextIndex.value = index
  visible.value = true
}

const closeMenu = () => {
  visible.value = false
}
watch(visible, val => {
  if (val) {
    document.body.addEventListener('click', closeMenu)
  } else {
    document.body.removeEventListener('click', closeMenu)
  }
})
</script>

<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);

  .tags-view-wrapper {
    .tags-view-item {
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;

      &:first-of-type {
        margin-left: 15px;
      }

      &:last-of-type {
        margin-right: 15px;
      }

      &.active {
        color: #fff;

        &::before {
          content: '';
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 4px;
        }
      }

      // close 按钮
      .el-icon-close {
        width: 16px;
        height: 16px;
        line-height: 10px;
        vertical-align: 2px;
        border-radius: 50%;
        text-align: center;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        transform-origin: 100% 50%;

        &:before {
          transform: scale(0.6);
          display: inline-block;
          vertical-align: -3px;
        }

        &:hover {
          background-color: #b4bccc;
          color: #fff;
        }
      }

    }
  }
}
</style>
