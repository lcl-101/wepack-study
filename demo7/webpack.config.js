const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');  //代码压缩
const UglifyJSPlugins = new UglifyJSPlugin({
  uglifyOptions:{
    warnings: false,
    ie8: true,
  }
});

const vendors = [
    'react',
    'react-dom'
];

const ROOT_PATH = path.resolve(__dirname);
const DIST_PATH = path.resolve(__dirname,'dist');
console.log(ROOT_PATH);

console.log(path.resolve(__dirname, 'app'));

const HTMLWebpackPlugins = new HTMLWebpackPlugin({  //依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html
  template: ROOT_PATH + "/app/index.html"
});

const CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({  //提取出第三方库到vendor.bundle.js
    name: ['vendor'],
})

const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin() //热替换

module.exports = {
  entry: {
    vendors,
    main:'./app/main.js',
    a:'./app/a.js'
  },
  output:{
    path: DIST_PATH,
    filename:'[name].bundle.js'
  },
  devServer:{
    contentBase:'./app',
    historyApiFallback: true,
    inline: true,
    open: true,
    hot: true
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
    UglifyJSPlugins,
    HTMLWebpackPlugins,
    CommonsChunkPlugin,
    HotModuleReplacementPlugin
  ]
}
