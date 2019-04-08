<template>
  <div class="bld-wrapper">
    <div id="chart-bld">
      <v-line :data="chartData" />
    </div>
  </div>
</template>

<script>
import VLine from 'v-charts/lib/line.common'

export default {
  name: 'Bld',
  components: {
    VLine
  },
  data() {
    return {
      chartData: {
        columns: ['日期', '销售额'],
        rows: [
          { 日期: '1月1日', 销售额: 123 },
          { 日期: '1月2日', 销售额: 1223 },
          { 日期: '1月3日', 销售额: 2123 },
          { 日期: '1月4日', 销售额: 4123 },
          { 日期: '1月5日', 销售额: 3123 },
          { 日期: '1月6日', 销售额: 7123 }
        ]
      }
    }
  }
}
</script>
