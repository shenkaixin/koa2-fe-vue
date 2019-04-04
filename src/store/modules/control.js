import Cookies from 'js-cookie'
import { getLanguage } from '../../plugins/element'

console.log(getLanguage(), 'getLanguage')

const state = {
  language: getLanguage()
}

const mutations = {
  EDIT_LANGUAGE: (state, language) => {
    state.language = language
    Cookies.set('language', language)
  }
}

const actions = {
  editLanguage({ commit }, language) {
    commit('EDIT_LANGUAGE', language)
  }
}

export default {
  // 命名空间 https://vuex.vuejs.org/zh/guide/modules.html#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4
  namespaced: true,
  state,
  mutations,
  actions
}
