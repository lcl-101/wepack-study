const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPlugins = new HTMLWebpackPlugin({
  title: 'Code Splitting'
})
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');  //代码压缩
const UglifyJSPlugins = new UglifyJSPlugin({
  uglifyOptions:{
    warnings: false,
    ie8: true,
  }
});

console.log(path.resolve(__dirname, 'app'));

module.exports = {
  entry: {
    main:'./app/main.js',
    a:'./app/a.js'
  },
  output:{
    path: path.resolve(__dirname, 'app'),
    filename:'[name].bundle.js'
  },
  devServer:{
    contentBase:'./app',
    historyApiFallback: true,
    inline: true,
    open: true
  },
  module:{
    rules:[
      {
        test:/(\.jsx|\.js)$/,
        use:{
          loader:'babel-loader'
        },
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins:[
    UglifyJSPlugins,HTMLWebpackPlugins
  ]
}
