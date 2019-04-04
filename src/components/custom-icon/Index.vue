<template>
  <div class="">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${name}`" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'CustomIcon',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>
