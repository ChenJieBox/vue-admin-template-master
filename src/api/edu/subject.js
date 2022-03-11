/*
 * @Author: your name
 * @Date: 2022-03-11 10:33:15
 * @LastEditTime: 2022-03-11 16:15:02
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-template-master\src\api\edu\subject.js
 */
import request from '@/utils/request'
export default {
  // 1 课程分类列表
  getSubjectList() {
    return request({
      url: '/eduservice/subject/getAllSubject',
      method: 'get'
    })
  }
}
