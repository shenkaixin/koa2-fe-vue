<script>
export default {
  name: 'CommonTable',
  props: {
    tableAttrs: {
      type: Object,
      default: function(val) {
        return val
      }
    },
    tableData: {
      type: Array,
      default: Function
    },
    tableColumnData: {
      type: Array,
      default: Function
    },
    emptyText: {
      type: String,
      default: '数据走丢了'
    }
  },
  render() {
    let baseCfg = {
      formatter(row, column) {
        return row[column.property] || '--'
      }
    }

    return (
      <el-table
        {...{ props: this.tableAttrs }}
        data={this.tableData}
        empty-text={this.emptyText}
      >
        {this.tableColumnData.map((item) => {
          return item.slotName ? (
            this.$slots[item.slotName] || '--'
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
