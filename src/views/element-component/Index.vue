<template>
  <div class="radio-wrapper">
    <component :is="activeTab" />
  </div>
</template>

<script>
import Radio from './Radio'
import CheckBox from './CheckBox'

export default {
  name: 'ElementComponent',
  components: {
    Radio,
    CheckBox
  },
  data() {
    return {
      activeTab: 'Radio'
    }
  },
  watch: {
    $route: {
      handler: function(val) {
        if (val.params) {
          const { path } = val.params
          this.activeTab = path
        }
      },
      deep: true
    }
  }
}
</script>
