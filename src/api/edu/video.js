/*
 * @Author: your name
 * @Date: 2022-03-23 16:32:11
 * @LastEditTime: 2022-03-23 20:46:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-template-master\src\api\edu\video.js
 */
import request from '@/utils/request'
export default {
  // 查找小节
  getVideo(id) {
    return request({
      url: '/eduservice/edu-video/getVideo',
      method: 'get',
      params: { id }
    })
  },

  // 添加小节
  addVideo(video) {
    return request({
      url: '/eduservice/edu-video/addVideo',
      method: 'post',
      data: video
    })
  },

  // 删除小节
  deleteVideo(id) {
    return request({
      url: '/eduservice/edu-video/deleteVideo',
      method: 'delete',
      params: { id }
    })
  },
  // 修改小节
  updateVideo(video) {
    return request({
      url: '/eduservice/edu-video/updateVideo',
      method: 'post',
      data: video
    })
  }
}
