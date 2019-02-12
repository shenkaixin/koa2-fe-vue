import $ from './http'

// 获取用户所有的信息
export const getUserList = params => $('get', '/userList', params)

// 用户id查找单个用户的信息
export const getUserIdInfo = params => $('post', '/findIdUser', params)

// 新增用户
export const addUser = params => $('post', '/addUser', params)

// 修改用户信息
export const updateUser = params => $('post', '/updateUser', params)

// 删除用户
export const deleteUser = params => $('get', `/deleteUser/${params}`)