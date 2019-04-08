<script>
export default {
  name: 'CommonTable',
  props: {
    // table属性
    tableAttrs: {
      type: Object,
      default: function(val) {
        return val
      }
    },
    // table中的数据
    tableData: {
      type: Array,
      default: Function
    },
    // table头部文字
    tableColumnData: {
      type: Array,
      default: Function
    },
    // 没有数据的时候展示的文字
    emptyText: {
      type: String,
      default: '数据走丢了'
    },
    // 语言对应的字段
    tableLanguage: {
      type: String,
      default: 'content.userList'
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
        v-loading={this.tableAttrs.loading}
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
              {...{
                props: Object.assign({}, baseCfg, item.attrs, {
                  label: this.$t(`${this.tableLanguage}.${item.attrs.prop}`)
                })
              }}
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
