import $ from './http'

// 登陆的接口
export const register = (params) => $('post', '/register', params)
