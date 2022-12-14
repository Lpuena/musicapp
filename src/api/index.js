import axios from 'axios'

// 获取轮播图api
// type:资源类型,对应以下类型,默认为 0 即 PC
// 0: pc
// 1: android
// 2: iphone
// 3: ipad
export function getBanner(type) {
  return axios.get(`http://localhost:3000/banner?type=${type}`)
}

// 获取推荐歌单
export function getMusicList(limit = 1) {
  return axios.get('http://localhost:3000/personalized?limit=' + limit)
}
