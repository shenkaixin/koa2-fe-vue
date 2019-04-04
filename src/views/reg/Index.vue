<template>
  <div class="reg-wrapper">
    <el-row type="flex" justify="center" align="middle">
      <el-form
        ref="regFormRef"
        label-width="70px"
        :model="regForm"
        :rules="rules"
      >
        <el-col :span="24">
          <el-form-item label="用户名" prop="userName">
            <el-input v-model="regForm.userName" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="密码" prop="psd">
            <el-input v-model="regForm.psd" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-button @click="submit">
            注册
          </el-button>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
import { register } from '../../apis/register'

export default {
  name: 'Reg',
  data() {
    return {
      regForm: {
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
      this.$refs.regFormRef.validate((valid) => {
        if (valid) {
          register(this.regForm)
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
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/common.scss';

.reg-wrapper {
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
