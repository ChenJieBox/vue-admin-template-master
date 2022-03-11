<!--
 * @Author: your name
 * @Date: 2022-03-10 11:04:33
 * @LastEditTime: 2022-03-10 23:30:37
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-template-master\src\views\edu\subject\save.vue
-->
<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="信息描述">
        <el-tag type="info">excel模版说明</el-tag>
        <el-tag>
          <i class="el-icon-download"/>
          <a :href="'/static/01.xlsx'">点击下载模版</a>
        </el-tag>

      </el-form-item>

      <el-form-item label="选择Excel">
        <el-upload
          ref="upload"
          :auto-upload="false"
          :on-success="fileUploadSuccess"
          :on-error="fileUploadError"
          :disabled="importBtnDisabled"
          :limit="1"
          :action="BASE_API+'/eduservice/subject/addSubject'"
          name="file"
          accept="application/vnd.ms-excel">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button
            :loading="loading"
            style="margin-left: 10px;"
            size="small"
            type="success"
            @click="submitUpload">上传到服务器</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      BASE_API: process.env.BASE_API, // 接口API地址
      importBtnDisabled: false, // 按钮是否禁用,
      loading: false
    }
  },
  created() {

  },
  methods: {
    // 点击按钮上传文件到接口里面
    submitUpload() {
      this.importBtnDisabled = true
      this.loading = true
      // js: document.getElementById("upload").submit()
      alert('upload')
      this.$refs.upload.submit()
    },
    // 上传成功
    fileUploadSuccess(response) {
      // 提示信息
      this.loading = false
      this.$message({
        type: 'success',
        message: '添加课程分类成功'
      })
      // 跳转课程分类列表
      // 路由跳转
      this.$router.push({ path: '/subject/list' })
    },
    // 上传失败
    fileUploadError() {
      this.loading = false
      this.$message({
        type: 'error',
        message: '添加课程分类失败'
      })
    }
  }
}
</script>
