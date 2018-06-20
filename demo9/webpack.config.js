const webpack = require('webpack');
const path = require('path');
var glob = require('glob');
const HTMLWebpackPlugin = require('html-webpack-plugin');  //依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //把css单独抽离出来打包

//生成环境
var NODE_ENV = process.env.NODE_ENV;
var isProduction = NODE_ENV ==='production' ? true : false;


//资源路径
const ROOT_PATH = path.resolve(__dirname);
const PATH_VIEW = path.resolve(__dirname,'src/view');

//导出通用js
var vendor = [
  'vue',
  'vue-router'
];

const CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({  //提取出第三方库到vendor.bundle.js
    name: ['vender'],
    filename:'[name]/[name].js',
    // children:true,
    minChunks: Infinity
})

var plugins = []; //存放动态生成的插件数组

var conf = {
  template: glob.sync(PATH_VIEW + '/**/*.html')[0],
  filename: 'views/demo/index.html'
}
plugins.push(new HTMLWebpackPlugin(conf));

console.log(PATH_VIEW);

module.exports = {
  entry: {
    'index': __dirname + '/src/module/demo/demo.js',
    'vender': vendor
  },
  output: {
    path: __dirname+ '/dist/',
    filename:'[name]/[name].bundle.js'
  },
  devServer:{
    contentBase:"./dist/views/demo",
    historyApiFallback: true, // 不跳转，依赖于HTML5 history API ，如果设置为true，所有的跳转将指向index.html
    inline: true,
    open: true
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
            loader: 'vue-loader',
        }
      },
      {
        test:/(\.jsx|\.js)$/,
        use:{
          loader:'babel-loader'
        },
        exclude:/node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  resolve: { //定义能够被打包的文件，文件后缀名
      extensions: ['.js','.jsx','.json','.css','vue']
  },
  plugins:[
    CommonsChunkPlugin
  ].concat(plugins)
}
