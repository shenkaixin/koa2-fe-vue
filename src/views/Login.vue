<template>
  <div>
    <el-form :model="loginForm" ref="loginFormRef">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="loginForm.userName" />
      </el-form-item>
      <el-form-item label="密码" prop="psd">
        <el-input v-model="loginForm.psd" />
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">
          登陆
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login } from '../apis/login'
import _ from 'lodash'

export default {
  data () {
    return {
      loginForm: {
        userName: '',
        psd: ''
      }
    }
  },
  methods: {
    submit () {
      this.$refs.loginFormRef.validate((valid) => {
        if (valid) {
          login(this.loginForm)
            .then((r) => {
              if (r.code === 200) {
                sessionStorage.setItem('token', _.get(r, 'token', ''))
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
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style></style>
