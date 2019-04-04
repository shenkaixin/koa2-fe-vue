<template>
  <div class="upload-wrapper">
    <h2>Upload</h2>
    <el-upload action="/api/uploadFile">
      <el-button size="small" type="primary">
        点击上传
      </el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data() {
    return {}
  }
}
</script>
