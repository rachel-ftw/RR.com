const webpackValidator = require('webpack-validator')
const {resolve} = require('path')

module.exports = () => {
  const config = {
    entry: "./startup.js",
    output: {
      path: resolve('dist'),
      filename: "bundle.js",
      publicPath: '/dist/',
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: "style!css" }
      ]
    }
  }
  return webpackValidator(config)
}
