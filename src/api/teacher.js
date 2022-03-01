/*
 * @Author: your name
 * @Date: 2022-03-01 09:08:09
 * @LastEditTime: 2022-03-01 16:57:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-template-master\src\api\teacher.js
 */
import request from '@/utils/request'

export function getTeacherListPage(page, limit, teacherQuery) {
  return request({
    url: '/eduservice/edu-teacher/pageTeacherCondition',
    method: 'post',
    // teacherQurey对象使用ResponseBody传递时需要使用data
    data: teacherQuery,
    params: { page, limit }
  })
}

export function deleteTeacherId(id) {
  return request({
    url: '/eduservice/edu-teacher/delete',
    method: 'delete',
    params: { id }
  })
}

// 添加讲师
export function addTeacher(teacher) {
  return request({
    url: `/eduservice/edu-teacher/addTeacher`,
    method: 'post',
    data: teacher
  })
}
// 根据id查询讲师
export function getTeacherInfo(id) {
  return request({
    url: `/eduservice/edu-teacher/getTeacher`,
    method: 'get',
    params: { id }
  })
}
// 修改讲师
export function updateTeacherInfo(teacher) {
  return request({
    url: `/eduservice/edu-teacher/updateTeacher`,
    method: 'post',
    data: teacher
  })
}
