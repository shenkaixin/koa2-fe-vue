<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox
      v-for="(item, index) in items"
      :key="index"
      :label="item.value"
    >
      {{ item.label | placeholder }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  data() {
    return {
      checkList: [],
      items: [
        {
          label: '我是多选一',
          value: '1'
        },
        {
          label: '我是多选二',
          value: '2'
        }
      ]
    }
  }
}
</script>
