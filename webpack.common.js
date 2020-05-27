const path = require('path');
const webpack = require('webpack');
const HtmlPackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
    ]
  },
  plugins: [
  new HtmlPackPlugin({
    template: './src/index.html',
    filename: 'index.html'})
  ],
  optimization: {
    minimize: true,
    minimizer: [
    new TerserPlugin({
      test: /\.js(\?.*)?$/i,
      exclude: /node_modules/,
      sourceMap: true
    })
    ],
  },
}
