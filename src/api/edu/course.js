/*
 * @Author: your name
 * @Date: 2022-03-18 15:23:50
 * @LastEditTime: 2022-03-22 20:05:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-template-master\src\api\edu\course.js
 */
import request from '@/utils/request'
export default {
  // 1 添加课程信息
  addCourseInfo(courseInfo) {
    return request({
      url: '/eduservice/edu-course/addCourseInfo',
      method: 'post',
      data: courseInfo
    })
  },
  getCourseInfo(courseId) {
    return request({
      url: '/eduservice/edu-course/getCourseInfo',
      method: 'get',
      params: { courseId }
    })
  },
  updateCourseInfo(courseInfoVo) {
    return request({
      url: '/eduservice/edu-course/updateCourseInfo',
      method: 'post',
      data: courseInfoVo
    })
  }
}
