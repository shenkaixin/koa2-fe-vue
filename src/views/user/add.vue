<template>
  <div v-loading="loading" class="add-user-wrapper">
    <h2 class="title">
      新增用户
    </h2>
    <common-form :form-item="FormItems" @save="handleSave" />
  </div>
</template>

<script>
import { addUser } from '../../apis/user'
import CommonForm from '../../components/common-form/Inde'
import FormItems from './constant/form-item'

export default {
  name: 'AddUser',
  components: {
    CommonForm
  },
  data() {
    return {
      FormItems,
      loading: false
    }
  },
  methods: {
    handleSave(form) {
      this.loading = true
      addUser(form)
        .then((r) => {
          if (r.code === 0) {
            this.$message.success({
              message: r.message
            })
            this.$router.push('/user')
          } else {
            this.$message.error({
              message: r.message
            })
          }
        })
        .catch((err) => {
          this.$message.error({
            message: err
          })
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/common.scss';

.add-user-wrapper {
  .title {
    margin-bottom: $marginHeight;
  }
}
</style>
