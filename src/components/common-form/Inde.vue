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
        <template v-if="item.type === 'text'">
          <el-input
            v-model.trim="form[item.model]"
            :placeholder="`请填写${item.label}`"
            :disabled="item.disabled"
            :maxlength="item.maxlength"
          />
        </template>
        <template v-else-if="item.type === 'textarea'">
          <el-input
            v-model.trim="form[item.model]"
            :placeholder="`请填写${item.label}`"
            type="textarea"
            resize="none"
          />
        </template>
        <template v-else-if="item.type === 'cascader'">
          <el-cascader
            v-model="form[item.model]"
            class="cascader-wrapper"
            :options="item.cascaderOptions"
            :props="item.props || cascaderProps"
            :placeholder="`请填写${item.label}`"
            @change="handleCascaderItemChange"
          />
        </template>
        <template v-else-if="item.type === 'radio'">
          <el-radio-group v-model="form[item.model]">
            <el-radio
              v-for="radio in item.radioOptions"
              :key="radio.value"
              :label="radio.value"
            >
              {{ radio.label }}
            </el-radio>
          </el-radio-group>
        </template>
        <template v-else-if="item.type === 'select'">
          <el-select
            v-model="form[item.model]"
            class="select-wrapper"
            :placeholder="`请选择${item.label}`"
          >
            <el-option
              v-for="select in item.selectOptions"
              :key="select.value"
              :label="select.label"
              :value="select.value"
            />
          </el-select>
        </template>
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
      rules: {},
      // 级联选择的默认key
      cascaderProps: {
        label: 'label',
        value: 'value',
        children: 'children'
      }
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
    /**
     * 初始化
     */
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
    },
    /**
     * @description 级联点击以后向上传参
     * @param val 当前val数组中的最后一个值
     */
    handleCascaderItemChange(val) {
      this.$emit('handleCascaderItem', val)
    }
  }
}
</script>

<style lang="scss">
.common-form {
  .cascader-wrapper,
  .select-wrapper {
    width: 100%;
  }
}
</style>
