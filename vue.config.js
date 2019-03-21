const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

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
  },
  chainWebpack: (config) => {
    // 压缩
    config.optimization.minimize(true)
    // 分割
    config.optimization.splitChunks({
      chunks: 'all',
      minSize: 10000, //// 提高缓存利用率，这需要在http2/spdy
      maxSize: 0, //没有限制
      minChunks: 3, // 共享最少的chunk数，使用次数超过这个值才会被提取
      maxAsyncRequests: 5, //最多的异步chunk数
      maxInitialRequests: 5, // 最多的同步chunks数
      automaticNameDelimiter: '~', // 多页面共用chunk命名分隔符
      name: true,
      // 声明的公共chunk
      cacheGroups: {
        vendor: {
          // 过滤需要打入的模块
          test: (module) => {
            if (module.resource) {
              const include = [/[\\/]node_modules[\\/]/].every((reg) => {
                return reg.test(module.resource)
              })
              const exclude = [/[\\/]node_modules[\\/](vue|vuex|element)/].some(
                (reg) => reg.test(module.resource)
              )
              return include && !exclude
            }
            return false
          },
          name: 'vendor',
          priority: 50, // 确定模块打入的优先级
          reuseExistingChunk: true // 使用复用已经存在的模块
        },
        vue: {
          test({ resource }) {
            return /[\\/]node_modules[\\/](react|redux)/.test(resource)
          },
          name: 'vue',
          priority: 20,
          reuseExistingChunk: true
        },
        element: {
          test: /[\\/]node_modules[\\/]element/,
          name: 'element',
          priority: 15,
          reuseExistingChunk: true
        }
      }
    })
    // 压缩图片的
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('img-loader')
      .loader('img-loader')
      .options({
        plugins: [
          require('imagemin-jpegtran')(),
          require('imagemin-pngquant')({
            quality: [0.75, 0.85]
          }),
          // lodash按需加载
          new LodashModuleReplacementPlugin()
        ]
      })
  }
}
