<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-24 12:10:12
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-31 11:52:57
 * @FilePath: /code/vue3-normal-admin/src/views/layout/components/NavBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="navbar">
    <!-- 汉堡 -->
    <hamburger class="hamburger-container"></hamburger>
    <!-- 面包屑 -->
    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <div class="right-menu">
      <!-- 全局搜索 -->
      <HeaderSearch class="right-menu-item hover-effect" />
      <!-- 全屏 -->
      <Screenfull class="right-menu-item hover-effect" />
      <!-- 换肤 -->
      <ThemeSelect class="right-menu-item hover-effect" />
      <!-- 语言选择 -->
      <LangSelect class="right-menu-item hover-effect" />
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="40" :src="$store.getters.userInfo.avatar" />
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>{{ $t('msg.navBar.home') }}</el-dropdown-item>
            </router-link>
            <a target="__blank" href="https://github.com/v833">
              <el-dropdown-item>{{ $t('msg.navBar.course') }}</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="handleLogoutClick">{{ $t('msg.navBar.logout') }}</el-dropdown-item>

          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import Hamburger from '@/components/hamburger/index.vue'
import Breadcrumb from '@/components/breadcrumb/index.vue'
import LangSelect from '@/components/langSelect/index.vue'
import ThemeSelect from '@/components/themeSelect/index.vue'
import Screenfull from '@/components/screenfull/index.vue'
import HeaderSearch from '@/components/headerSearch/index.vue'
const store = useStore()
const handleLogoutClick = () => {
  store.commit('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    // hover 动画
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  .breadcrumb-container {
    float: left
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;

    padding-right: 16px;

    ::v-deep .avatar-container {
      cursor: pointer;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px
        }
      }
    }
  }
}

::v-deep .right-menu-item {
  display: inline-block;
  padding: 0 18px 0 0;
  font-size: 24px;
  color: #5a5e66;
  vertical-align: text-bottom;

  &.hover-effect {
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
}
</style>
