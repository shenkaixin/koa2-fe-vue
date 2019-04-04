<template>
  <div class="common-form">
    <el-form
      ref="form"
      :label-position="labelPosition"
      :label-width="labelWidth"
      :model="form"
      :rules="rules"
    >
      <el-form-item
        v-for="item in formItem"
        :key="item.label"
        :label="`${item.label}：`"
        :prop="item.model"
        :class="item.class"
      >
        <el-input
          v-if="item.type === 'text'"
          v-model.trim="form[item.model]"
          :placeholder="`请填写${item.label}`"
          :disabled="item.disabled"
          :maxlength="item.maxlength"
        />
        <el-input
          v-else-if="item.type === 'textarea'"
          v-model.trim="form[item.model]"
          :placeholder="`请填写${item.label}`"
          type="textarea"
          resize="none"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          {{ submitBtn | placeholder }}
        </el-button>
        <el-button @click="$router.go(-1)">
          返回列表
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CommonForm',
  props: {
    formItem: {
      type: Array,
      required: true
    },
    labelPosition: {
      type: String,
      default: () => 'right'
    },
    labelWidth: {
      type: String,
      default: () => '100px'
    },
    submitBtn: {
      type: String,
      default: () => '新增'
    }
  },
  data() {
    return {
      form: {},
      rules: {}
    }
  },
  watch: {
    formItem(val) {
      if (this.visible) {
        const newForm = this.formItemWatcher(val)
        this.form = {
          ...newForm,
          ...this.form
        }
      }
    }
  },
  methods: {
    formItemWatcher(param) {
      let form = {}
      let val = param || this.formItem || []
      val.forEach((item) => {
        form[item.model] = item.initialValue
        if (item.rule) {
          this.rules[item.model] = item.rule
        }
      })
      return form
    },
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('save', this.form)
        } else {
          return false
        }
      })
    }
  }
}
</script>
