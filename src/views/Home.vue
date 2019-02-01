<template>
  <div class="home">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="nickname"
        label="用户名"
      />
      <el-table-column
        prop="phoneNumber"
        label="手机号"
      />
      <el-table-column
        prop="avatar"
        label="图片地址"
      />
      <el-table-column
        prop="accessToken"
        label="权限编号"
      />
      <el-table-column
        prop="_id"
        label="用户Id"
      />
    </el-table>
  </div>
</template>

<script>
import {
  getUserList,
} from '../apis/user'

export default {
  name: 'home',
  components: {
  },
  data() {
    return {
      tableData: [],
    }
  },
  mounted() {
    this.getDetails()
  },
  methods: {
    async getDetails() {
      let r = await getUserList({})
      this.tableData = _.get(r, 'data', [])
    }
  }
}
</script>
