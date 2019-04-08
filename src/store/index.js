import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/)
console.log(files, 'fffff')
const modules = files.keys().reduce((val, curVal) => {
  const fileName = curVal.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = files(curVal)
  val[fileName] = value.default
  return val
}, {})
console.log(modules, 'modules')

export default new Vuex.Store({
  modules,
  getters
})
