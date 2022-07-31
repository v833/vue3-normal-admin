<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-24 12:09:51
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-31 11:14:00
 * @FilePath: /code/vue3-normal-admin/src/views/layout/components/SideBar/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="logo-container">
      <el-avatar style="cursor: pointer" :size="logoHeight" shape="square" @click="handleLogoClick"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png" />
      <i class="logo-title" v-if="$store.getters.sidebarOpened">admin</i>
    </div>
    <!-- scrollbar 当menu过长设置滚动条 -->
    <el-scrollbar>
      <SidebarMenu></SidebarMenu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const logoHeight = ref(40)

const router = useRouter()
const handleLogoClick = () => {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }

  .el-avatar {
    --el-avatar-background-color: none;
    margin-right: 12px
  }
}
</style>
