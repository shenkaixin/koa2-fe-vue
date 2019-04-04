import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/axios'
import './assets/iconfont/iconfont'

/* 重置样式 */
import './assets/css/index.scss'

/* 饿了么组件 */
import './plugins/element'

/* 全局过滤器 */
import './filters/index'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
