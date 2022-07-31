<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-04 22:54:30
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-31 01:19:25
 * @FilePath: /code/vue3-normal-admin/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template lang="">
  <div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from './utils/theme'

const store = useStore()
generateNewStyle(store.getters.mainColor).then(style => writeNewStyle(style))

</script>
<style lang="">

</style>
