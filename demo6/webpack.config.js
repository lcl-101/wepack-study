const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');  //代码压缩
const UglifyJSPlugins = new UglifyJSPlugin({
  uglifyOptions:{
    warnings: false,
    ie8: true,
  }
});

const DefinePlugin = new webpack.DefinePlugin({
   __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
})
console.log(DefinePlugin.definitions);
console.log(process.env.NODE_ENV);
console.log(process.env);
if(process.env.NODE_ENV == 'dev'){
  console.log('this is dev env');
}else {
  console.log('this is prod env');
}

module.exports = {
  entry: __dirname + '/app/main.js',
  output:{
    path:__dirname + '/app',
    filename:'bundle.js'
  },
  devServer: {
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
          loader:'babel-loader',
          options:{
            presets:['env','react']
          }
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
            loader: "css-loader",
            options:{
              modules:true
            }
          }
        ]
      }
    ]
  },
  plugins:[
    UglifyJSPlugins
  ]
}
