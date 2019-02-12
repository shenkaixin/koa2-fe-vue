<template>
  <div>
    <el-form :model="registerForm" ref="registerRef">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="registerForm.userName" />
      </el-form-item>
      <el-form-item label="密码" prop="psd">
        <el-input v-model="registerForm.psd" />
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">
          注册
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { register } from '../apis/register'

export default {
  data() {
    return {
      registerForm: {
        userName: '',
        psd: ''
      }
    }
  },
  methods: {
    submit() {
      this.$refs.registerRef.validate((valid) => {
        if (valid) {
          console.log(this.registerForm, '表单数据')
          console.log(register, 'registerApi')
          register(this.registerForm)
            .then((r) => {
              if (r.code === 200) {
                this.$message.success({
                  message: r.message
                })
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
