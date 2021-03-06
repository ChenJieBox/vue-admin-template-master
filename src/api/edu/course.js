/*
 * @Author: your name
 * @Date: 2022-03-18 15:23:50
 * @LastEditTime: 2022-03-26 15:25:42
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
  },
  getPublihCourseInfo(courseId) {
    return request({
      url: '/eduservice/edu-course/getPublishCourse',
      method: 'get',
      params: { courseId }
    })
  },
  // 最终发布
  publihCourse(courseId) {
    return request({
      url: '/eduservice/edu-course/publishCourse',
      method: 'post',
      params: { courseId }
    })
  },
  // 获取所有课程列表
  getCourseList(page, size) {
    return request({
      url: '/eduservice/edu-course/getCourseList',
      method: 'get',
      params: { page, size }
    })
  },

  // 根据id删除课程
  deleteCourse(courseId) {
    return request({
      url: '/eduservice/edu-course/deleteCourse',
      method: 'delete',
      params: { courseId }
    })
  }
}
