import Vue from 'vue'
import axios from 'axios'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const handleAxios = axios.create(config)

handleAxios.interceptors.request.use(
  function (requestConfig) {
    // Do something before request is sent
    return requestConfig
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
handleAxios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

// eslint-disable-next-line
Plugin.install = function (Vue) {
  Vue.axios = handleAxios
  window.axios = handleAxios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return handleAxios
      }
    },
    $axios: {
      get () {
        return handleAxios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
