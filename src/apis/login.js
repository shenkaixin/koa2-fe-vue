import $ from './http'

// 登陆的接口
export const login = (params) => $('post', '/login', params)
