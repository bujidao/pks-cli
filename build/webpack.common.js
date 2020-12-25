const webpack = require('webpack');
const packageInfo = require('../package.json');

module.exports = {
  entry: {
    app: './src/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new webpack.BannerPlugin(`${packageInfo.name} version：${packageInfo.version}`)
  ],
  output: {
    libraryTarget: 'umd',
    library: 'bujidao'
  }
}