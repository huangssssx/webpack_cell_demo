var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
//    new webpack.optimize.OccurenceOrderPlugin(),
//    new webpack.HotModuleReplacementPlugin(),
//    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      }
    ]
  }

};
