<template>
  <div class="radio-wrapper">
    <h2>Radio</h2>
    <el-radio
      v-for="(item, index) in items"
      :key="index"
      v-model="radio"
      :label="item.value"
    >
      {{ item.label | placeholder }}
    </el-radio>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data() {
    return {
      radio: '',
      items: [
        {
          label: '我是单选一',
          value: '1'
        },
        {
          label: '我是单选二',
          value: '2'
        }
      ]
    }
  }
}
</script>
