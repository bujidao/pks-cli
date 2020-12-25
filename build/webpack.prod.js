const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const packageInfo = require('../package.json');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin()
  ],
  output: {
    filename: `${packageInfo.name}-${packageInfo.version}.js`,
    path: path.resolve(__dirname, '../dist')
  }
})