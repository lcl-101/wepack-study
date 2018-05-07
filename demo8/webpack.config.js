const webpack = require('webpack');
const path = require('path');
var glob = require('glob');
const HTMLWebpackPlugin = require('html-webpack-plugin');  //依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');  //代码压缩
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //把css单独抽离出来打包
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin') //把抽离出来的css打包压缩(webpack 3.x 安装 optimize-css-assets-webpack-plugin@3.2.0)

const vendor = [
  'react',
  'react-dom'
];
const ROOT_PATH = path.resolve(__dirname);
const PATH_DIST = path.resolve(__dirname,'dist');
const PATH_VIEW = path.resolve(__dirname,'src/view');
const SRC_VIEW = path.resolve(__dirname,'src');

const CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({  //提取出第三方库到vendor.bundle.js
    name: ['vender'],
    filename:'[name]/[name].[hash].js',
    // children:true,
    minChunks: Infinity
})

const UglifyJSPlugins = new UglifyJSPlugin({
  uglifyOptions:{
    warnings: false,
    ie8: true
  },
  sourceMap: true
});
const ExCSS = new ExtractTextPlugin("[name]/[name].[contenthash].css");
const OptimizeCSSAssets = new OptimizeCSSPlugin();


var entryTpl = {}; //存放模板对象 用于跟入口js对应
var plugins = []; //存放动态生成的插件数组

//入口html
const enterHtml = glob.sync(PATH_VIEW + '/**/*.html');
enterHtml.forEach(function(filePath){
  var entryPath = path.dirname(filePath);
  entryPath = entryPath.substring(entryPath.lastIndexOf('/')+1);
  var filename = filePath.substring(filePath.lastIndexOf('/')+1,filePath.lastIndexOf('.'));
  var conf = {
    template: filePath,
    filename: 'views/' + entryPath + '/'+filename + '.html'
  }
  plugins.push(new HTMLWebpackPlugin(conf));
  entryTpl[filename] = filePath;
})
const enterJsFile = glob.sync(SRC_VIEW + '/**/*.js');
const enterJs = {};
enterJsFile.forEach(function(filePath){
  var filename = filePath.substring(filePath.lastIndexOf('/')+1,filePath.lastIndexOf('.'));
  if(filename in entryTpl){
    enterJs[filename] = filePath;
  }
})
module.exports = {
  entry:Object.assign(enterJs,{
    'vender': ['react','react-dom']
  }),
  devServer:{
    contentBase:"./dist",
    historyApiFallback: true,
    inline: true,
    open: true
  },
  output: {
    path:PATH_DIST,
    filename:'[name]/[name].[chunkhash].bundle.js'
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
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins:[
    UglifyJSPlugins,
    CommonsChunkPlugin,
    ExCSS,
    OptimizeCSSAssets
  ].concat(plugins)
}
