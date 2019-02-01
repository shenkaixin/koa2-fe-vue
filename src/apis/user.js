import $ from './http'

// 获取用户所有的信息
export const getUserList = params => $('post', '/userList', params)

// 新增用户
export const addUser = params => $('post', '/addUser', params)