import PcasCode from '../../../assets/files/pcas-code.json'

export default [
  {
    type: 'text',
    label: '用户名',
    model: 'userName',
    initialValue: undefined,
    rule: []
  },
  {
    type: 'text',
    label: '别名',
    model: 'nickname',
    initialValue: undefined,
    rule: []
  },
  {
    type: 'text',
    label: '手机号',
    model: 'phoneNumber',
    initialValue: undefined,
    rule: []
  },
  {
    type: 'text',
    label: '图片地址',
    model: 'avatar',
    initialValue: undefined,
    rule: []
  },
  {
    type: 'text',
    label: '版本号',
    model: 'verifyCode',
    initialValue: undefined,
    rule: []
  },
  {
    type: 'cascader',
    label: '所在地',
    model: 'address',
    props: {
      label: 'name',
      value: 'code',
      children: 'children'
    },
    initialValue: [],
    cascaderOptions: PcasCode,
    rule: []
  },
  {
    type: 'select',
    label: '学历',
    model: 'education',
    initialValue: undefined,
    selectOptions: [
      {
        label: '小学',
        value: 0
      },
      {
        label: '初中',
        value: 1
      },
      {
        label: '高中',
        value: 2
      },
      {
        label: '中专',
        value: 3
      },
      {
        label: '大专',
        value: 4
      },
      {
        label: '本科',
        value: 5
      },
      {
        label: '研究生',
        value: 6
      },
      {
        label: '博士',
        value: 7
      }
    ],
    rule: []
  },
  {
    type: 'radio',
    label: '性别',
    model: 'rex',
    initialValue: undefined,
    radioOptions: [
      {
        label: '男',
        value: 0
      },
      {
        label: '女',
        value: 1
      }
    ],
    rule: []
  }
]
