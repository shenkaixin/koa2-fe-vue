<template>
  <el-container class="index-wrapper">
    <el-header>
      <Header />
    </el-header>
    <el-container class="container">
      <el-aside width="280px">
        <el-menu class="el-menu-vertical-demo">
          <el-submenu
            v-for="(item, index) in menuList"
            :key="index"
            :index="item.key"
          >
            <span slot="title">
              <i :class="item.iconName" />
              {{ item.menuName }}
            </span>
            <el-menu-item-group>
              <template v-if="item.metaList && item.metaList.length > 0">
                <el-menu-item
                  v-for="(m, i) in item.metaList"
                  :key="i"
                  :index="m.key"
                  @click="handleMenuItem(m)"
                >
                  <i :class="m.iconName" />
                  {{ m.menuName }}
                </el-menu-item>
              </template>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container class="container-right">
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
import Header from '../components/common-views/header'
import Footer from '../components/common-views/footer'

export default {
  name: 'Index',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      menuList: [
        {
          menuName: '用户',
          iconName: 'el-icon-setting',
          key: '1',
          metaList: [
            {
              menuName: '用户列表',
              iconName: 'el-icon-document',
              key: '1-1',
              path: '/user'
            }
          ]
        },
        {
          menuName: '组件',
          iconName: 'el-icon-menu',
          key: '2',
          metaList: [
            {
              menuName: '单选框',
              iconName: 'el-icon-document',
              key: '2-1',
              path: '/element-component',
              query: '/radio'
            },
            {
              menuName: '多选框',
              iconName: 'el-icon-document',
              key: '2-2',
              path: '/element-component',
              query: '/checkBox'
            },
            {
              menuName: '下拉选择框',
              iconName: 'el-icon-document',
              key: '2-3',
              path: '/element-component',
              query: '/selectView'
            },
            {
              menuName: '级联选择器',
              iconName: 'el-icon-document',
              key: '2-4',
              path: '/element-component',
              query: '/cascader'
            },
            {
              menuName: '上传',
              iconName: 'el-icon-document',
              key: '2-5',
              path: '/element-component',
              query: '/upload'
            }
          ]
        },
        {
          menuName: '图表',
          iconName: 'el-icon-tickets',
          key: '3',
          metaList: [
            {
              menuName: '折线图',
              iconName: 'el-icon-document',
              key: '3-1',
              path: '/eCharts',
              query: '/Bld'
            }
          ]
        },
        {
          menuName: '外部链接',
          iconName: 'el-icon-more',
          key: '10',
          metaList: [
            {
              menuName: '百度',
              iconName: 'el-icon-document',
              key: '10-1',
              path: '/iframe',
              query: '/https%3A%2F%2Fwww.baidu.com'
            }
          ]
        }
      ]
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  watch: {
    language() {
      this.formatLanguage()
    }
  },
  methods: {
    handleMenuItem(item) {
      if (item.query) {
        this.$router.push({
          path: `${item.path}${item.query}`
        })
      } else {
        this.$router.push({
          path: item.path
        })
      }
    },
    // 切换语言
    formatLanguage() {
      this.menuList = [
        {
          menuName: this.$t('content.leftNav.userName'),
          iconName: 'el-icon-setting',
          key: '1',
          metaList: [
            {
              menuName: this.$t('content.leftNav.userList'),
              iconName: 'el-icon-document',
              key: '1-1',
              path: '/user'
            }
          ]
        },
        {
          menuName: this.$t('content.leftNav.component'),
          iconName: 'el-icon-menu',
          key: '2',
          metaList: [
            {
              menuName: this.$t('content.leftNav.radio'),
              iconName: 'el-icon-document',
              key: '2-1',
              path: '/element-component',
              query: '/radio'
            },
            {
              menuName: this.$t('content.leftNav.checkbox'),
              iconName: 'el-icon-document',
              key: '2-2',
              path: '/element-component',
              query: '/checkBox'
            },
            {
              menuName: this.$t('content.leftNav.select'),
              iconName: 'el-icon-document',
              key: '2-3',
              path: '/element-component',
              query: '/selectView'
            },
            {
              menuName: this.$t('content.leftNav.cascader'),
              iconName: 'el-icon-document',
              key: '2-4',
              path: '/element-component',
              query: '/cascader'
            },
            {
              menuName: this.$t('content.leftNav.upload'),
              iconName: 'el-icon-document',
              key: '2-5',
              path: '/element-component',
              query: '/upload'
            }
          ]
        },
        {
          menuName: this.$t('content.leftNav.eCharts'),
          iconName: 'el-icon-tickets',
          key: '3',
          metaList: [
            {
              menuName: this.$t('content.leftNav.line'),
              iconName: 'el-icon-document',
              key: '3-1',
              path: '/eCharts',
              query: '/Bld'
            }
          ]
        },
        {
          menuName: this.$t('content.leftNav.link'),
          iconName: 'el-icon-more',
          key: '10',
          metaList: [
            {
              menuName: this.$t('content.leftNav.baidu'),
              iconName: 'el-icon-document',
              key: '10-1',
              path: '/iframe',
              query: '/https%3A%2F%2Fwww.baidu.com'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/common.scss';

.index-wrapper {
  .el-header,
  .el-footer {
    padding: 0;
  }
  .container {
    height: calc(100vh - #{$commonHeight * 2});
    padding: $commonPadding 0;
    &-right {
      background-color: var(--commonViewBgColor);
    }
  }
  overflow: hidden;
}
</style>
