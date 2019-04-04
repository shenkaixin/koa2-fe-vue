<template>
  <div class="checkbox-wrapper">
    <h2>Checkbox</h2>
    <el-checkbox-group v-model="checkList">
      <el-checkbox
        v-for="(item, index) in items"
        :key="index"
        :label="item.value"
      >
        {{ item.label | placeholder }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
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
