<script>
export default {
<<<<<<< HEAD
  name: "CommonTable",
=======
  name: 'CommonTable',
>>>>>>> 8cc0ca751e759ad8cbe66475acfd9dde815eeff3
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
<<<<<<< HEAD
      default: "暂无数据"
    }
  },
  render() {
    let baseCfg = () => {
      return {
        formatter(row, column) {
          return row[column.property] || "--";
        },
        "show-overflow-tooltip": true
      };
    };
=======
      default: '暂无数据'
    }
  },
  render () {
    let baseCfg = () => {
      return {
        formatter (row, column) {
          return row[column.property] || '--'
        },
        'show-overflow-tooltip': true
      }
    }
>>>>>>> 8cc0ca751e759ad8cbe66475acfd9dde815eeff3

    return (
      <el-table {...{ props: this.tableAttrs }} data={this.tableData}>
        {this.tableColumnData.map(item => {
          return item.slotName ? (
            this.$slots[item.slotName]
          ) : (
            <el-table-column
              show-overflow-tooltip
              scopedSlots={item.$scopeSlots}
              {...{ props: Object.assign({}, baseCfg, item.attrs) }}
            />
<<<<<<< HEAD
          );
        })}
        {this.$slots.default}
      </el-table>
    );
  }
};
=======
          )
        })}
        {this.$slots.default}
      </el-table>
    )
  }
}
>>>>>>> 8cc0ca751e759ad8cbe66475acfd9dde815eeff3
</script>

<style></style>
