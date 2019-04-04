<template>
  <div class="home">
    <el-button
      class="addBtn"
      type="primary"
      size="medium"
      @click="$router.push('/addUser')"
    >
      新增用户
    </el-button>
    <common-table
      :table-column-data="TableConfig.tableColumnData"
      :table-data="tableData"
      :table-attrs="TableConfig.tableAttrs"
    >
      <template
        v-for="slot in TableConfig.tableColumnData.filter(
          (item) => !!item.slotName
        )"
        :slot="slot.slotName"
      >
        <slot :name="`column-${slot.slotName}`">
          <el-table-column
            :label="slot.attrs.label"
            :min-width="slot.attrs['min-width']"
          >
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click="$router.push(`/updateUserTree/${scope.row._id}`)"
              >
                权限
              </el-button>
              <el-button
                type="text"
                size="small"
                @click="$router.push(`/updateUser/${scope.row._id}`)"
              >
                编辑
              </el-button>
              <el-button
                class="del"
                type="text"
                size="small"
                @click="handleDeleteUser(scope.row._id)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </slot>
      </template>
    </common-table>
  </div>
</template>

<script>
import _ from 'lodash'
import CommonTable from '../../components/common-table/Index'
import TableConfig from './constant/table-config'
import { getUserList, deleteUser } from '../../apis/user'

export default {
  name: 'Home',
  components: {
    CommonTable
  },
  data() {
    return {
      TableConfig,
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

<style lang="scss">
@import '../../assets/css/common.scss';

.home {
  .addBtn {
    float: right;
    margin-bottom: $marginHeight;
  }
  .del {
    color: var(--delFontColor);
  }
}
</style>
