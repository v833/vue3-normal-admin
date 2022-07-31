<!--
 * @Author: v833 2507301541@qq.com
 * @Date: 2022-07-30 21:27:19
 * @LastEditors: v833 2507301541@qq.com
 * @LastEditTime: 2022-07-31 01:15:54
 * @FilePath: /code/vue3-normal-admin/src/components/themeSelect/components/CompSelectColor.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-dialog :title="$t('msg.universal.title')" :model-value="modelValue" @close="closed" width="600px">
    <div class="center">
      <div class="title">{{ $t('msg.theme.themeColorChange') }}</div>
      <el-color-picker v-model="mColor" :predefine="predefineColors"></el-color-picker>
    </div>
    <template #footer>
      <el-button @click="closed">{{ $t('msg.universal.cancel') }}</el-button>
      <el-button type="primary" @click="confirm">{{ $t('msg.universal.confirm') }}</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue'
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emits = defineEmits(['update:modelValue'])
const closed = () => {
  emits('update:modelValue', false)
}

const store = useStore()
const confirm = async () => {
  const style = await generateNewStyle(mColor.value)
  writeNewStyle(style)
  store.commit('theme/setMainColor', mColor.value)
  closed()
}

// 默认色值
const mColor = ref(store.getters.mainColor)
// 预定义色值
const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577'
]

</script>

<style lang="scss" scoped>
.center {
  text-align: center;

  .title {
    margin-bottom: 12px;
  }
}
</style>
