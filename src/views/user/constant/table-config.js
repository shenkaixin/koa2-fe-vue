export default {
  tableAttrs: {
    border: true,
    stripe: true
  },
  tableColumnData: [
    {
      attrs: {
        label: '用户名',
        prop: 'userName',
        showOverflowTooltip: true
      }
    },
    {
      attrs: {
        label: '别名',
        prop: 'nickname',
        showOverflowTooltip: true
      }
    },
    {
      attrs: {
        label: '手机号',
        prop: 'phoneNumber',
        showOverflowTooltip: true
      }
    },
    {
      attrs: {
        label: '图片地址',
        prop: 'avatar',
        showOverflowTooltip: true
      }
    },
    {
      attrs: {
        label: '版本号',
        prop: 'verifyCode',
        showOverflowTooltip: true
      }
    },
    {
      attrs: {
        label: '权限编号',
        prop: 'accessToken',
        showOverflowTooltip: true
      }
    },
    {
      attrs: {
        label: '用户Id',
        prop: '_id',
        showOverflowTooltip: true
      }
    },
    {
      attrs: {
        label: '操作',
        'min-width': 120
      },
      slotName: 'operate'
    }
  ]
}
