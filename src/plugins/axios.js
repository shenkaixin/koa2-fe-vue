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
<<<<<<< HEAD
  function(requestConfig) {
    // Do something before request is sent
    return requestConfig
  },
  function(error) {
=======
  function (requestConfig) {
    // Do something before request is sent
    return requestConfig
  },
  function (error) {
>>>>>>> 8cc0ca751e759ad8cbe66475acfd9dde815eeff3
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
handleAxios.interceptors.response.use(
<<<<<<< HEAD
  function(response) {
    // Do something with response data
    return response
  },
  function(error) {
=======
  function (response) {
    // Do something with response data
    return response
  },
  function (error) {
>>>>>>> 8cc0ca751e759ad8cbe66475acfd9dde815eeff3
    // Do something with response error
    return Promise.reject(error)
  }
)

// eslint-disable-next-line
<<<<<<< HEAD
Plugin.install = function(Vue) {
=======
Plugin.install = function (Vue) {
>>>>>>> 8cc0ca751e759ad8cbe66475acfd9dde815eeff3
  Vue.axios = handleAxios
  window.axios = handleAxios
  Object.defineProperties(Vue.prototype, {
    axios: {
<<<<<<< HEAD
      get() {
=======
      get () {
>>>>>>> 8cc0ca751e759ad8cbe66475acfd9dde815eeff3
        return handleAxios
      }
    },
    $axios: {
<<<<<<< HEAD
      get() {
=======
      get () {
>>>>>>> 8cc0ca751e759ad8cbe66475acfd9dde815eeff3
        return handleAxios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
