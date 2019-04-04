<template>
  <div class="user-tree">
    <h2>用户权限</h2>
    <el-tree
      ref="tree"
      :data="treeData"
      show-checkbox
      :props="props"
      node-key="id"
      :default-checked-keys="[2, 3]"
      :default-expanded-keys="[5]"
      @check-change="getCheckedNodes"
    />
    <el-button @click="$router.go(-1)">
      返回列表
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: {
        label: 'label',
        children: 'children'
      },
      treeData: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    getCheckedNodes() {
      console.log(this.$refs.tree.getCheckedNodes())
    }
  }
}
</script>
