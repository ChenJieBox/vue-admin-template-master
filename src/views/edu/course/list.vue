<!--
 * @Author: your name
 * @Date: 2022-03-18 15:23:06
 * @LastEditTime: 2022-03-26 15:37:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-template-master\src\views\edu\course\list.vue
-->
<template>
  <el-row>
    <el-col :span="18"><div class="grid-content bg-purple"/>
      <el-table
        :data="courseList"
        border
        style="width: 100%">
        <el-table-column
          v-for="(item ,index) in colunmName"
          :key="index"
          :prop="item.prop"
          :label="item.lable"
          :width="item.width"
        />
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="editCourse(scope.row.id)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="deleteCourse(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
      <el-pagination
        :current-page="page"
        :page-size="size"
        :total="total"
        background
        layout="prev, pager, next"
        @current-change="getCourseList"/>
    </el-col>
    <el-col :span="6"><div class="grid-content bg-purple-light"/></el-col>
  </el-row>
</template>

<script>
import course from '@/api/edu/course'
export default {
  data() {
    return {
      colunmName: [
        {
          prop: 'title',
          lable: '课程名称'

        },
        {
          prop: 'subjectOne',
          lable: '课程分类',
          width: 100
        },
        {
          prop: 'teacherName',
          lable: '讲师名称',
          width: 100
        },
        {
          prop: 'lessonNum',
          lable: '课时数',
          width: 80
        },
        {
          prop: 'price',
          lable: '价格',
          width: 80
        },
        {
          prop: 'gmtCreate',
          lable: '创建时间',
          width: 200
        }
      ],
      courseList: [],
      total: -1,
      page: 1,
      size: 5
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.getCourseList(this.page, this.size)
    },
    // 获取课程列表信息
    getCourseList(page, size) {
      course.getCourseList(page, size)
        .then(res => {
          this.courseList = res.data.courseList
          this.total = res.data.total
        })
    },
    // 删除课程
    deleteCourse(courseId) {
      this.$confirm('此操作将永久删除该课程, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        course.deleteCourse(courseId)
          .then(res => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            this.getCourseList()
          })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    editCourse(courseId) {
      this.$router.push({ path: '/course/info/' + courseId })
    }
  }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
