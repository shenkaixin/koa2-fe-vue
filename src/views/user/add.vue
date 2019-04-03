<template>
  <div class="add-user-wrapper">
    <h2 class="title">
      新增用户
    </h2>
    <el-form ref="addUserRef" :model="addUserForm" label-width="70px">
      <el-form-item label="用户名">
        <el-input v-model="addUserForm.userName" />
      </el-form-item>
      <el-form-item label="别名">
        <el-input v-model="addUserForm.nickname" />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="addUserForm.phoneNumber" />
      </el-form-item>
      <el-form-item label="图片地址">
        <el-input v-model="addUserForm.avatar" />
      </el-form-item>
      <el-form-item label="版本号">
        <el-input v-model="addUserForm.verifyCode" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          添加用户
        </el-button>
        <el-button @click="$router.go(-1)">
          返回列表
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addUser } from '../../apis/user'

export default {
  data() {
    return {
      addUserForm: {
        userName: '',
        nickname: '',
        phoneNumber: '',
        avatar: '',
        verifyCode: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.addUserRef.validate(async (valid) => {
        if (valid) {
          addUser(this.addUserForm)
            .then((r) => {
              if (r.code === 0) {
                this.$message.success({
                  message: r.message
                })
                this.$router.push('/')
              } else {
                this.$message.error({
                  message: r.message
                })
              }
            })
            .catch((err) => {
              this.$message.error({
                message: err
              })
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/common.scss';

.add-user-wrapper {
  .title {
    margin-bottom: $marginHeight;
  }
}
</style>
