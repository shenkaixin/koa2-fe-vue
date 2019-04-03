<template>
  <div class="footer-wrapper">
    这是一个vue项目的尾部说明
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import '../../assets/css/common.scss';

.footer-wrapper {
  display: table-cell;
  vertical-align: middle;
  width: 100vw;
  height: $commonHeight;

  text-align: center;
  border-top: 1px solid var(--borderColor);
}
</style>
