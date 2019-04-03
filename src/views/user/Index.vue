<template>
  <div class="home">
    <el-button class="addBtn" @click="$router.push('/addUser')">
      新增用户
    </el-button>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="userName" label="用户名" />
      <el-table-column prop="nickname" label="别名" />
      <el-table-column prop="phoneNumber" label="手机号" />
      <el-table-column prop="avatar" label="图片地址" />
      <el-table-column prop="verifyCode" label="版本号" />
      <el-table-column prop="accessToken" label="权限编号" />
      <el-table-column prop="_id" label="用户Id" />
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/updateUser/${scope.row._id}`)"
          >
            编辑
          </el-button>
          <el-button
            type="text"
            size="small"
            @click="handleDeleteUser(scope.row._id)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getUserList, deleteUser } from '../../apis/user'
import _ from 'lodash'

export default {
  name: 'Home',
  components: {},
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
      await getUserList()
        .then((r) => {
          if (r.code === 200) {
            this.$message.success({
              message: r.message
            })
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
    },
    handleDeleteUser(id) {
      this.$confirm('确定删除本条用户数据？', '提示', {
        confirmButtonText: '确定',
        concelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        await deleteUser(id).then((r) => {
          if (r.code === 200) {
            this.$message.success({
              type: 'sucssage',
              message: '删除成功'
            })
            this.getDetails()
          } else {
            this.$message.error({
              type: 'error',
              message: '删除失败'
            })
          }
        })
      })
    }
  }
}
</script>

<style lang="less">
@import '../../assets/css/common.less';

.home {
  .addBtn {
    margin-bottom: @marginHeight;
  }
}
</style>
