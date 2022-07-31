import { LANG, TAGS_VIEW } from '@/constant'
import { getItem, setItem } from '@/utils/storage'
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: getItem(LANG) || 'zh',
    tagsViewList: getItem(TAGS_VIEW) || []
  }),
  mutations: {
    triggerSidebarOpened: (state) => {
      state.sidebarOpened = !state.sidebarOpened
    },

    // 设置国际化
    setLanguage(state, lang) {
      setItem(LANG, lang)
      state.language = lang
    },
    // 添加tags
    addTagsViewList(state, tag) {
      // 如果已经存在,则不添加
      const isFind = state.tagsViewList.find(item => item.path === tag.path)
      if (!isFind) {
        state.tagsViewList.push(tag)
        setItem(TAGS_VIEW, state.tagsViewList)
      }
    },
    // 为指定的tags修改title
    changeTagsView(state, { index, tag }) {
      state.tagsViewList[index] = tag
      setItem(TAGS_VIEW, state.tagsViewList)
    },

    removeTagsView(state, { type, index }) {
      if (type === 'other') {
        state.tagsViewList = state.tagsViewList.filter((_, i) => i === index)
      } else if (type === 'right') {
        state.tagsViewList = state.tagsViewList.filter((_, i) => i <= index)
      } else if (type === 'index') {
        state.tagsViewList.splice(index, 1)
      }
      setItem(TAGS_VIEW, state.tagsViewList)
    }
  }
}
