<!--
 * @Author: your name
 * @Date: 2022-03-10 11:04:33
 * @LastEditTime: 2022-03-18 17:50:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-admin-template-master\src\views\edu\subject\list.vue
-->
<template>
  <div class="app-container">
    <el-input v-model="filterText" placeholder="Filter keyword" style="margin-bottom:30px;" />

    <el-tree
      ref="subjectTree"
      :data="subjectList"
      :props="defaultProps"
      :filter-node-method="filterNode"
      class="filter-tree"
      default-expand-all
    />

    <el-cascader
      v-model="value"
      :show-all-levels="false"
      :options="subjectList"
      :props="{ expandTrigger: 'hover',value:'id' ,label:'title'}"
      @change="handleChange"/>
  </div>
</template>

<script>
import subject from '@/api/edu/subject'
export default {

  data() {
    return {
      filterText: '',
      subjectList: [],
      defaultProps: {
        children: 'children',
        label: 'title'
      },
      value: null
    }
  },
  watch: {
    filterText(val) {
      this.$refs.subjectTree.filter(val)
    }
  },

  created() {
    this.fetchNodeList()
  },

  methods: {
    fetchNodeList() {
      subject.getSubjectList().then(response => {
        if (response.success === true) {
          this.subjectList = response.data.list
          console.log(this.subjectList)
        }
      })
    },
    filterNode(value, data) {
      if (!value) return true
      return data.title.indexOf(value) !== -1
    },
    handleChange(value) {
      alert(value[1])
    }
  }
}
</script>
