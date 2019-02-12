import $ from './http'

// 获取用户所有的信息
export const getMovieList = (params) => $('post', '/movieList', params)