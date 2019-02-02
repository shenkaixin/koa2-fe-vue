import axios from 'axios'

/**
 * 创建实例
 */
let instance = axios.create({
  baseURL: '/api',
  timeout: 6000,
})

/**
 * 请求拦截
 */
instance.interceptors.request.use((config) => {
  return config
}, (err) => {
  return Promise.reject(err)
})

/**
 * 响应拦截
 */
instance.interceptors.response.use((response) => {
  let { data, } = response
  return data
}, (err) => {
  return Promise.reject(err)
})

/**
 * 使用es6的export default导出了一个函数，导出的函数代替axios去帮我们请求数据，
 * 函数的参数及返回值如下：
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url:
 * @param {Object} data    请求的参数
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 */
export default (method, url, data = null) => {
  method = method.toLowerCase()
  if (method == 'post') {
    return instance.post(url, data)
  } else if (method == 'get') {
    return instance.get(url, { params: data} )
  } else if (method == 'delete') {
    return instance.delete(url, { params: data })
  } else if (method == 'put') {
    return instance.put(url, data)
  } else {
    // eslint-disable-next-line
    console.log(`未知的method ${method}`)
    return false
  }
}