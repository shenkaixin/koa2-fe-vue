<template>
  <div>
    <h2>编辑用户</h2>
    <el-form
      :model="addUserForm"
      ref="addUserRef"
    >
      <el-form-item
        label="用户名"
      >
        <el-input
          v-model="addUserForm.nickname"
        />
      </el-form-item>
      <el-form-item
        label="手机号"
      >
        <el-input
          v-model="addUserForm.phoneNumber"
        />
      </el-form-item>
      <el-form-item
        label="图片地址"
      >
        <el-input
          v-model="addUserForm.avatar"
        />
      </el-form-item>
      <el-form-item
        label="版本号"
      >
        <el-input
          v-model="addUserForm.verifyCode"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >
          修改用户
        </el-button>
      </el-form-item>
    </el-form>
    <el-button
      @click="$router.go(-1)"
    >
      返回列表
    </el-button>
  </div>
</template>

<script>
import {
  updateUser,
  getUserIdInfo,
} from '../../apis/user'
import _ from 'lodash'

export default {
  data () {
    return {
      addUserForm: {
        nickname: '',
        phoneNumber: '',
        avatar: '',
        verifyCode: '',
      },
    }
  },
  mounted() {
    this.getDetails()
  },
  methods: {
    async getDetails() {
      await getUserIdInfo({ id: this.$route.params.id, }).then(r => {
        if (r.code === 200) {
          this.$message.success({
            message: r.message,
          })
          this.addUserForm = _.get(r, 'data', {})
        } else {
          this.$message.error({
            message: r.message,
          })
        }
      }).catch(err => {
        this.$message.success({
          message: err,
        })
      })
    },
    onSubmit() {
      this.$refs.addUserRef.validate(async valid => {
        const params = Object.assign({}, this.addUserForm, {
          id: this.$route.params.id,
        })
        if (valid) {
          updateUser(params).then(r => {
            if (r.code === 200) {
              this.$message.success({
                message: r.message,
              })
              // this.$router.push('/')
            } else {
              this.$message.error({
                message: r.message,
              })
            }
          }).catch(err => {
            this.$message.error({
              message: err,
            })
          })
        } else {
          return false
        }
      })
    }
  },
}
</script>

<style>
</style>
