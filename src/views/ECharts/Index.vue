<template>
  <div class="ECharts-wrapper">
    <component :is="activeTab" />
  </div>
</template>

<script>
import Bld from './Bld.vue'

export default {
  name: 'ECharts',
  components: {
    Bld
  },
  data() {
    return {
      activeTab: 'Bld'
    }
  },
  watch: {
    $route: {
      handler: function({ params }) {
        if (params) {
          this.activeTab = params
        }
      }
    }
  }
}
</script>
