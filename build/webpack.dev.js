const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')
const packageInfo = require('../package.json');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watchOptions:{
    poll: 1000,
    aggregateTimeout: 500,
    ignored: /node_modules/, 
  },
  devServer: {
    contentBase: path.join(__dirname, "../examples"),
    host: 'localhost',
    port: 9372,
    hot: true,
    open: true
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false
    })
  ],
  output: {
    filename: `${packageInfo.name}-alpha.js`,
    path: path.resolve(__dirname, '../examples/js')
  }
})
