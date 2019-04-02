<template>
  <div class="header-wrapper">
    <div class="logo">
      我是logo
    </div>
    <div class="header-action">
      <div />
      <el-dropdown @command="handleCommand">
        <span>
          meiyu
          <i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu
          v-for="(item, index) in actions"
          slot="dropdown"
          :key="index"
        >
          <el-dropdown-item :key="item.key" :command="item.key">
            {{ item.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      actions: [
        {
          label: '退出',
          key: '1'
        }
      ]
    }
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case '1':
          console.log(command, 'command')
          this.$router.push({
            path: '/login'
          })
          break
        default:
          console.log(111)
          break
      }
    }
  }
}
</script>

<style lang="less">
@import '../../assets/css/common.less';

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: @commonHeight;
  padding: 0 @commonPadding;

  color: var(--color);
  border-bottom: 1px solid var(--borderColor);
}
</style>
