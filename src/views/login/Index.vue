<template>
  <div class="login-wrapper">
    <el-row type="flex" justify="center" align="middle">
      <el-form
        ref="loginFormRef"
        label-width="70px"
        :model="loginForm"
        :rules="rules"
      >
        <el-col :span="24">
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="loginForm.userName" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="密码" prop="psd">
            <el-input v-model="loginForm.psd" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-button @click="submit">
            登陆
          </el-button>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'
import { login } from '../../apis/login'

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        userName: '',
        psd: ''
      },
      rules: {
        userName: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        psd: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submit() {
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
          // console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/common.scss';

.login-wrapper {
  text-align: center;
  height: 100vh;
  .el-row {
    height: 100%;
    .el-form {
      width: 600px;
      padding: 30px;

      background-color: #e8e8e8;
    }
  }
}
</style>
