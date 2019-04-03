<template>
  <div class="iframe-wrapper">
    <iframe :src="query" />
  </div>
</template>

<script>
export default {
  name: 'Iframe',
  data() {
    return {
      query: ''
    }
  },
  created: function() {
    console.log(this.$route.params, 'params')
    const {
      params: { path }
    } = this.$route
    this.query = path
  }
}
</script>

<style lang="scss">
.iframe-wrapper {
  iframe {
    width: 100%;
    border: 0;
  }
}
</style>
