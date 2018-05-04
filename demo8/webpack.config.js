const webpack = require('webpack');
const path = require('path');
var glob = require('glob');
const HTMLWebpackPlugin = require('html-webpack-plugin');  //依据一个简单的index.html模板，生成一个自动引用你打包后的JS文件的新index.html
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');  //代码压缩

const vendor = [
  'react',
  'react-dom'
];
const ROOT_PATH = path.resolve(__dirname);
const PATH_DIST = path.resolve(__dirname,'dist');
const PATH_VIEW = path.resolve(__dirname,'src/view');

const CommonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({  //提取出第三方库到vendor.bundle.js
    name: ['vender/vendor'],
})

const UglifyJSPlugins = new UglifyJSPlugin({
  uglifyOptions:{
    warnings: false,
    ie8: true,
  }
});

var plugins = [];

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
})

module.exports = {
  entry:{
    'vender/vender':vendor,
    'index/index':'./src/index/main.js'
  },
  devServer:{
    contentBase:"./dist",
    historyApiFallback: true,
    inline: true,
    open: true
  },
  output: {
    path:PATH_DIST,
    filename:'[name].bundle.js'
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
    CommonsChunkPlugin
  ].concat(plugins)
}
