<!--
 * @Author: your name
 * @Date: 2022-03-18 15:23:06
 * @LastEditTime: 2022-03-18 15:36:22
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-template-master\src\views\edu\course\publish.vue
-->
<template>

  <div class="app-container">

    <h2 style="text-align: center;">发布新课程</h2>

    <el-steps :active="3" process-status="wait" align-center style="margin-bottom: 40px;">
      <el-step title="填写课程基本信息"/>
      <el-step title="创建课程大纲"/>
      <el-step title="最终发布"/>
    </el-steps>

    <el-form label-width="120px">

      <el-form-item>
        <el-button @click="previous">返回修改</el-button>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="publish">发布课程</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      saveBtnDisabled: false // 保存按钮是否禁用
    }
  },

  created() {
    console.log('publish created')
  },

  methods: {
    previous() {
      console.log('previous')
      this.$router.push({ path: '/course/chapter/1' })
    },

    publish() {
      console.log('publish')
      this.$router.push({ path: '/course/list' })
    }
  }
}
</script>
