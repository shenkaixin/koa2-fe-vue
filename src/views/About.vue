<template>
  <div>
    <el-upload action="/api//uploadFile">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <el-radio-group v-model="radio">
      <el-radio
        v-for="item in items"
        :label="item.value"
        :key="item.value"
        :disabled="item.value === '1'"
      >
        {{ item.label }}
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      items: [
        {
          label: '我是1号',
          value: '1'
        },
        {
          label: '我是2号',
          value: '2'
        },
        {
          label: '我是3号',
          value: '3'
        }
      ]
    }
  }
}
</script>

<style></style>
