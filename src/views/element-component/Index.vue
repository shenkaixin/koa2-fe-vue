<template>
  <div class="radio-wrapper">
    <component :is="activeTab" />
  </div>
</template>

<script>
import Radio from './Radio'
import CheckBox from './CheckBox'
import Select from './Select'
import Cascader from './Cascader'
import Upload from './Upload'

export default {
  name: 'ElementComponent',
  components: {
    Radio,
    CheckBox,
    selectView: Select,
    Cascader,
    Upload
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
          console.log(path, 'path')
          this.activeTab = path
        }
      },
      deep: true
    }
  }
}
</script>
