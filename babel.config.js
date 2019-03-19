<<<<<<< HEAD
module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
=======
const IS_PROD = process.env.NODE_ENV === 'production'
const plugins = [
  [
    'component',
    {
      libraryName: 'element-ui',
      styleLibraryName: 'theme-chalk'
    }
  ]
]

if (IS_PROD) {
  plugins.unshift([
    'transform-remove-console',
    {
      exclude: ['error', 'warn']
    }
  ])
}

module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins
>>>>>>> 8cc0ca751e759ad8cbe66475acfd9dde815eeff3
}
