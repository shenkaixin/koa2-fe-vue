import Vue from 'vue'
import axios from 'axios'

/**
 * 创建实例
 */
let instance = axios.create({
  baseURL: '/api',
  timeout: 6000
})

/**
 * 请求拦截
 */
instance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token')

    if (token) {
      config.headers.common['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

/**
 * 响应拦截
 */
instance.interceptors.response.use(
  (response) => {
    let { data } = response

    return data
  },
  (err) => {
    if (err.response.status === 401) {
      Vue.prototype.$msgBox
        .showMsgBox({
          title: '错误提示',
          content: '您的登录信息已失效，请重新登录',
          isShowCancelBtn: false
        })
        .then(() => {
          Vue.prototype.$router.push('/login')
        })
    } else {
      Vue.prototype.$message.showMessage({
        type: 'error',
        content: '系统出现错误'
      })
    }
    return Promise.reject(err)
  }
)

/**
 * 使用es6的export default导出了一个函数，导出的函数代替axios去帮我们请求数据，
 * 函数的参数及返回值如下：
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url:
 * @param {Object} data    请求的参数
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 */
export default (method, url, data = null) => {
  // eslint-disable-next-line
  method = method.toLowerCase()
  if (method === 'post') {
    return instance.post(url, data)
  } else if (method === 'get') {
    return instance.get(url, { params: data })
  } else if (method === 'delete') {
    return instance.delete(url, { params: data })
  } else if (method === 'put') {
    return instance.put(url, data)
  }
  // eslint-disable-next-line
  // console.log(`未知的method ${method}`)
  return false
}
