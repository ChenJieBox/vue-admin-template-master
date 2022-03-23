<template>

  <div class="app-container">

    <h2 style="text-align: center;">发布新课程</h2>

    <el-steps :active="1" process-status="wait" align-center style="margin-bottom: 40px;">
      <el-step title="填写课程基本信息"/>
      <el-step title="创建课程大纲"/>
      <el-step title="最终发布"/>
    </el-steps>

    <el-form label-width="120px">

      <el-form-item label="课程标题">
        <el-input v-model="courseInfo.title" placeholder=" 示例：机器学习项目课：从基础到搭建项目视频课程。专业名称注意大小写"/>
      </el-form-item>

      <!-- 所属分类 TODO -->

      <el-form-item label="课程分类">
        <el-cascader
          v-model="elcascader"
          :options="subjectList"
          :props="{ expandTrigger: 'hover',value:'id' ,label:'title'}"
          @change="handleChange"/>
      </el-form-item>
      <!-- 课程讲师 TODO -->
      <!-- 课程讲师 -->
      <el-form-item label="课程讲师">
        <el-select
          v-model="courseInfo.teacherId"
          placeholder="请选择">

          <el-option
            v-for="teacher in teacherList"
            :key="teacher.id"
            :label="teacher.name"
            :value="teacher.id"/>

        </el-select>
      </el-form-item>

      <el-form-item label="总课时">
        <el-input-number :min="0" v-model="courseInfo.lessonNum" controls-position="right" placeholder="请填写课程的总课时数"/>
      </el-form-item>

      <!-- 课程简介 TODO -->
      <el-form-item label="课程简介">

        <tinymce :height="300" v-model="courseInfo.description"/>

      </el-form-item>

      <!-- 课程封面 TODO -->
      <!-- 课程封面-->
      <el-form-item label="课程封面">

        <el-upload
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          :action="BASE_API+'/eduoss/fileoss/upload'"
          class="avatar-uploader">
          <img :src="courseInfo.cover">
        </el-upload>

      </el-form-item>

      <el-form-item label="课程价格">
        <el-input-number :min="0" v-model="courseInfo.price" controls-position="right" placeholder="免费课程请设置为0元"/> 元
      </el-form-item>

      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存并下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import course from '@/api/edu/course'
import subject from '@/api/edu/subject'
import { getListTeacher } from '@/api/teacher'
import Tinymce from '@/components/Tinymce'

export default {
  components: { Tinymce },
  data() {
    return {
      saveBtnDisabled: false,
      courseInfo: {
        title: '',
        subjectId: '', // 二级分类id
        subjectParentId: '', // 一级分类id
        teacherId: '',
        lessonNum: 0,
        description: '',
        cover: '/static/01.jpg',
        price: 0
      },
      elcascader: [],
      BASE_API: process.env.BASE_API, // 接口API地址
      teacherList: [], // 封装所有的讲师
      subjectList: [] // 课程分类

    }
  },
  created() {
    // 初始化所有讲师
    this.getListTeacher()
    // 获取课程分类
    this.getSubject()
    if (this.$route.params && this.$route.params.id) {
      this.courseInfo.id = this.$route.params.id
      this.getInfo()
    }
  },
  methods: {
    // 根据课程ID查询课程信息
    getInfo() {
      course.getCourseInfo(this.courseInfo.id)
        .then(res => {
          this.courseInfo = res.data.courseInfoVo
          this.elcascader.splice(0, 1, this.courseInfo.subjectParentId)
          this.elcascader.splice(1, 1, this.courseInfo.subjectId)
          console.log(this.elcascader)
        })
    },
    // 上传封面成功调用的方法
    handleAvatarSuccess(res, file) {
      this.courseInfo.cover = res.data.url
    },
    // 上传之前调用的方法
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    // 查询所有的一级分类
    getSubject() {
      subject.getSubjectList().then(response => {
        if (response.success === true) {
          this.subjectList = response.data.list
        }
      })
    },

    // 查询所有的讲师
    getListTeacher() {
      getListTeacher()
        .then(response => {
          this.teacherList = response.data.items
        })
    },

    // saveOrUpdate() {
    //   if (!this.courseInfo.id) {
    //     alert('添加课程信息')
    //     this.addCourse()
    //   } else {
    //     alert('更新课程信息')
    //     this.updateCourse()
    //   }
    // },
    // updateCourse() {
    //   course.updateCourseInfo(this.courseInfo)
    //     .then(response => {
    //       this.$message({
    //         type: 'success',
    //         message: '更新课程信息成功!'
    //       })
    //       this.$router.push({ path: '/course/chapter/' + response.data.courseInfo.id })
    //     })
    // },
    // addCourse() {
    //   course.addCourseInfo(this.courseInfo)
    //     .then(response => {
    //       this.$message({
    //         type: 'success',
    //         message: '添加课程信息成功!'
    //       })
    //       alert('....')
    //       this.$router.push({ path: '/course/chapter/' + response.data.courseInfo.id })
    //     })
    // },
    handleChange() {
      this.courseInfo.subjectId = this.elcascader[1]
      this.courseInfo.subjectParentId = this.elcascader[0]
    },
    addCourse() {
      course.addCourseInfo(this.courseInfo)
        .then(response => {
          // 提示
          this.$message({
            type: 'success',
            message: '添加课程信息成功!'
          })
          // 跳转到第二步
          this.$router.push({ path: '/course/chapter/' + response.data.courseId })
        })
    },
    // 修改课程
    updateCourse() {
      course.updateCourseInfo(this.courseInfo)
        .then(response => {
          // 提示
          this.$message({
            type: 'success',
            message: '修改课程信息成功!'
          })
          // 跳转到第二步
          this.$router.push({ path: '/course/chapter/' + response.data.courseId })
        })
    },
    saveOrUpdate() {
      // 判断添加还是修改
      if (!this.courseInfo.id) {
        // 添加
        this.addCourse()
      } else {
        this.updateCourse()
      }
    }
  }
}
</script>

<style scoped>

.tinymce-container {

  line-height: 29px;

}

</style>
