<template>
  <div class="header-wrapper">
    <div class="logo">
      {{ $t('header.logo') }}
    </div>
    <div class="header-action">
      <el-dropdown trigger="click" @command="handleLanuageCommand">
        <span>
          {{ langText[lang] }}
          <i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="item in messages"
            :key="item.key"
            :command="item.key"
            :disabled="item.key === langText.key"
          >
            {{ item.label | placeholder }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <Theme class="picker-color" />
      <el-dropdown @command="handleActionsCommand">
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
            {{ item.label | placeholder }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Theme from '../theme/Index'

export default {
  name: 'Header',
  components: {
    Theme
  },
  data() {
    return {
      actions: [
        {
          label: '退出',
          key: '1'
        }
      ],
      messages: [
        {
          label: '中文',
          key: 'zh'
        },
        {
          label: '英文',
          key: 'en'
        }
      ],
      langText: {
        zh: '中文',
        en: '英文'
      },
      lang: ''
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  created() {
    this.lang = 'zh'
  },
  methods: {
    // 点击用户名进行的操作
    handleActionsCommand(command) {
      switch (command) {
        case '1':
          this.$router.push({
            path: '/login'
          })
          break
        default:
          break
      }
    },
    // 切换语言
    handleLanuageCommand(command) {
      // 现在当前语言文字
      this.lang = this.messages.find((v) => v.key === command).key
      // 更新页面文字和vuex中的数据
      this.$i18n.locale = command
      this.$store.dispatch('control/editLanguage', command)
      this.actions = [
        {
          label: this.$t('header.loginOut'),
          key: '1'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/common.scss';

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $commonHeight;
  padding: 0 $commonPadding;

  color: var(--color);
  border-bottom: 1px solid var(--borderColor);
  .header-action {
    display: flex;
    align-items: center;
    .picker-color {
      margin-left: $marginHeight;
      margin-right: $marginHeight;
    }
  }
}
</style>
