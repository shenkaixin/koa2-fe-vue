<template>
  <div>
    <h2>爬虫数据</h2>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="title" label="名称" />
      <el-table-column prop="imgUrl" label="图片地址" />
      <el-table-column prop="meta.createAt" label="开始时间" />
      <el-table-column prop="meta.updateAt" label="更新时间" />
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      layout="total, prev, pager, next, jumper"
      :total="total"
    />
  </div>
</template>

<script>
import { getMovieList } from '../../apis/movie'
import _ from 'lodash'

export default {
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
    }
  },
  mounted() {
    this.getDetails()
  },
  methods: {
    async getDetails() {
      const params = {
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }
      await getMovieList(params)
        .then((r) => {
          if (r.code === 200) {
            this.tableData = _.get(r, 'data', [])
            this.total = _.get(r, 'total', 0)
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
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.currentPage = val
      this.getDetails()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
      this.getDetails()
    }
  }
}
</script>

<style></style>
