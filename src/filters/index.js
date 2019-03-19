import Vue from 'vue'

// 占位字符
Vue.filter('placeholder', function (val, charts) {
  return val || charts || '--'
})
