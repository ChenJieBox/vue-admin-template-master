/*
 * @Author: your name
 * @Date: 2022-02-25 09:31:51
 * @LastEditTime: 2022-03-01 20:49:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-template-master\src\api\login.js
 */
import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/eduService/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/eduService/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function test() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
