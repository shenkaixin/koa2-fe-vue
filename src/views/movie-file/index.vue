<template>
  <div>
    <h2>爬虫数据</h2>
    <common-table
      :table-attrs="tableAttrs"
      :table-column-data="tableColumnData"
      :table-data="tableData"
    ></common-table>
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
import _ from 'lodash'
import { getMovieList } from '../../apis/movie'
import CommonTable from '../../components/common-table/Index'
import tableColumnData from './_consts/movie-file-column'
export default {
  name: 'MovieFile',
  components: {
    CommonTable
  },
  data() {
    return {
      tableAttrs: {
        border: true
      },
      tableColumnData,
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      total: 0
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
      // console.log(`每页 ${val} 条`)
      this.currentPage = val
      this.getDetails()
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.currentPage = val
      this.getDetails()
    }
  }
}
</script>

<style></style>
