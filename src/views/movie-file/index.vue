<template>
  <div>
    <h2>爬虫数据</h2>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="title" label="名称" />
      <el-table-column prop="imgUrl" label="图片地址" />
    </el-table>
  </div>
</template>

<script>
import { getMovieList } from '../../apis/movie'
import _ from 'lodash'

export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getDetails()
  },
  methods: {
    async getDetails() {
      await getMovieList()
        .then((r) => {
          if (r.code === 200) {
            this.tableData = _.get(r, 'data', [])
          } else {
            this.$message.error({
              message: r.message
            })
          }
        })
        .catch((err) => {
          this.$message.success({
            message: err
          })
        })
    }
  }
}
</script>

<style></style>
