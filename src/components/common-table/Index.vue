<script>
export default {
  name: 'CommonTable',
  props: {
    tableAttrs: {
      type: Object
    },
    tableData: {
      type: Array
    },
    tableColumnData: {
      type: Array
    },
    emptyText: {
      type: String,
      default: '暂无数据'
    }
  },
  render() {
    let baseCfg = () => {
      return {
        formatter(row, column) {
          return row[column.property] || '--'
        },
        'show-overflow-tooltip': true
      }
    }

    return (
      <el-table {...{ props: this.tableAttrs }} data={this.tableData}>
        {this.tableColumnData.map((item) => {
          return item.slotName ? (
            this.$slots[item.slotName]
          ) : (
            <el-table-column
              show-overflow-tooltip
              scopedSlots={item.$scopeSlots}
              {...{ props: Object.assign({}, baseCfg, item.attrs) }}
            />
          )
        })}
        {this.$slots.default}
      </el-table>
    )
  }
}
</script>

<style></style>
