<template>
  <div :class="{ show: isShow }" class="header-search">
    <!-- <el-tooltip :content="$t('msg.navBar.headerSearch')"> -->
    <span @click.stop="onShowClick">
      <svg-icon class-name="search-icon" icon="search" />
    </span>
    <!-- </el-tooltip> -->

    <el-select ref="headerSearchSelectRef" class="header-search-select" v-model="search" filterable default-first-option
      remote placeholder="Search" :remote-method="querySearch" @change="onSelectChange">
      <el-option v-for="option in searchOptions" :key="option.item.path" :label="option.item.title.join(' > ')"
        :value="option.item.path"></el-option>
    </el-select>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { filterRouters } from '@/utils/route'
import { generateRoutes } from './fuseData'
import { useRouter } from 'vue-router'
import Fuse from 'fuse.js'
import { watchSwitchLang } from '@/utils/i18n.js'

// 控制 search 显示
const isShow = ref(false)
// el-select 实例
const headerSearchSelectRef = ref(null)
const onShowClick = () => {
  isShow.value = !isShow.value
}

// search 相关
const search = ref('')
// 搜索结果
const searchOptions = ref([])
// 搜索方法
const querySearch = query => {
  searchOptions.value = fuse.search(query)
}
// 选中回调
const router = useRouter()
const onSelectChange = val => {
  router.push(val)
}

// 检索数据源
let searchPool = computed(() => {
  const routes = filterRouters(router.getRoutes())
  return generateRoutes(routes)
})

/**
 * 搜索库相关
 */
let fuse = null
const initFuse = searchPool => {
  fuse = new Fuse(searchPool, {
    // 是否按优先级进行排序
    shouldSort: true,
    // 匹配算法放弃的时机， 阈值 0.0 需要完美匹配（字母和位置），阈值 1.0 将匹配任何内容。
    threshold: 0.4,
    // 匹配长度超过这个值的才会被认为是匹配的
    minMatchCharLength: 1,
    // 将被搜索的键列表。 这支持嵌套路径、加权搜索、在字符串和对象数组中搜索。
    // name：搜索的键
    // weight：对应的权重
    keys: [
      {
        name: 'title',
        weight: 0.7
      },
      {
        name: 'path',
        weight: 0.3
      }
    ]
  })
}
initFuse(searchPool.value)

/**
 * 关闭 search 的处理事件
 */
const onClose = () => {
  headerSearchSelectRef.value.blur()
  searchOptions.value = []
  isShow.value = false
}
/**
 * 监听 search 打开，处理 close 事件
 */
watch(isShow, val => {
  if (val) {
    document.body.addEventListener('click', onClose)
  } else {
    document.body.removeEventListener('click', onClose)
  }
})

// 处理国际化
watchSwitchLang(() => {
  searchPool = computed(() => {
    const routes = filterRouters(router.getRoutes())
    return generateRoutes(routes)
  })
  initFuse(searchPool.value)
})
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;

  ::v-deep .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    ::v-deep .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
