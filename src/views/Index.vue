<template>
  <el-container class="index-wrapper">
    <el-header>
      <Header />
    </el-header>
    <el-container class="container">
      <el-aside width="280px">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
        >
          <el-submenu
            v-for="(item, index) in menuList"
            :key="index"
            :index="item.key"
          >
            <span slot="title">
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
          iconName: 'el-icon-service',
          key: '1',
          metaList: [
            {
              menuName: '用户列表',
              key: '1-1',
              path: '/user'
            }
          ]
        },
        {
          menuName: '外部链接',
          iconName: 'el-icon-document',
          key: '2',
          metaList: [
            {
              menuName: '百度',
              key: '2-1',
              path: '/iframe',
              query: '/https%3A%2F%2Fwww.baidu.com'
            }
          ]
        },
        {
          menuName: 'ElementUI组件',
          iconName: 'el-icon-document',
          key: '3',
          metaList: [
            {
              menuName: '单选框',
              key: '3-1',
              path: '/element-component',
              query: '/radio'
            },
            {
              menuName: '多选框',
              key: '3-2',
              path: '/element-component',
              query: '/checkBox'
            },
            {
              menuName: '下拉选择框',
              key: '3-3',
              path: '/element-component',
              query: '/selectView'
            },
            {
              menuName: '级联选择器',
              key: '3-4',
              path: '/element-component',
              query: '/cascader'
            },
            {
              menuName: '上传',
              key: '3-5',
              path: '/element-component',
              query: '/upload'
            }
          ]
        },
        {
          menuName: 'eCharts',
          iconName: 'el-icon-document',
          key: '4',
          metaList: [
            {
              menuName: 'eCharts/Bld',
              key: '4-1',
              path: '/eCharts',
              query: '/Bld'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
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
    height: calc(100vh - ($commonHeight * 2));
    padding: $commonPadding 0;
    &-right {
      background-color: var(--commonViewBgColor);
    }
  }
  overflow: hidden;
}
</style>
