const withTypescript = require('@zeit/next-typescript')
const withCss = require('@zeit/next-css')

module.exports = withTypescript(withCss({
  webpack(config, options) {
    console.log(options)
    config.module.rules = [...config.module.rules, {
      test: /\.css$/,
      exclude: /\.module\.css$/,
      use: [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        }
      ]
      
    }]
    return config
  }
}))
