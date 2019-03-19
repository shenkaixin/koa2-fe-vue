module.exports = {
  devServer: {
    // ip映射
    proxy: {
      '/api': {
        target: 'http://localhost:3001/',
        changOrigin: true
      }
    },
    // eslint-loader在线上打包不使用
    // lintOnSave: process.env.NODE_ENV !== 'production',
    // // 强制使用eslint-loader
    overlay: {
      warnings: true,
      errors: true
    }
    // // source map文件
    // productionSourceMap: false
  }
}