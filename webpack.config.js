let VueLoaderPlugin = require('vue-loader/lib/plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin');
let PreloadWebpackPlugin = require('preload-webpack-plugin');

let path = require('path')

module.exports = {
  entry: './src/mainzx.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'bazxbel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-styzxle-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vuzxe-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(),
    new PreloadWebpackPlugin()
  ]
}
