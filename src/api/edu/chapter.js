/*
 * @Author: your name
 * @Date: 2022-03-20 19:13:37
 * @LastEditTime: 2022-03-23 20:10:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-template-master\src\api\edu\chapter.js
 */
/*
 * @Author: your name
 * @Date: 2022-03-18 15:23:50
 * @LastEditTime: 2022-03-20 19:59:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-template-master\src\api\edu\course.js
 */
import request from '@/utils/request'
export default {
  // 1 根据课程id获取章节
  getAllChapterVideo(courseId) {
    return request({
      url: '/eduservice/edu-chapter/getChapterVideo',
      method: 'get',
      params: { courseId }
    })
  },
  // 添加章节
  addChapter(chapter) {
    return request({
      url: '/eduservice/edu-chapter/addChapter',
      method: 'post',
      data: chapter
    })
  },
  // 根据id查询章节
  getChapter(id) {
    return request({
      url: '/eduservice/edu-chapter/getChapter/',
      method: 'get',
      params: { id }
    })
  },
  // 修改章节
  updateChapter(chapter) {
    return request({
      url: '/eduservice/edu-chapter/updateChapter',
      method: 'post',
      data: chapter
    })
  },
  // 删除章节
  deleteChapter(id) {
    return request({
      url: '/eduservice/edu-chapter/deleteChapter',
      method: 'delete',
      params: { id }
    })
  }
}
