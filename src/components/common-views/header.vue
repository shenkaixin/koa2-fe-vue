<template>
  <div class="header-wrapper">
    <img src="" alt="Logo" />
    <div class="header-action">
      111
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
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

  background-color: var(--bgColor);
  border-bottom: 1px solid var(--borderColor);
}
</style>
