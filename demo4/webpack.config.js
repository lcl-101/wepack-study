module.exports = {
  entry:__dirname + '/app/main.js',
  output:{
    path: __dirname + "/app",
    filename:'bundle.js'
  },
  devServer:{
    contentBase:'./app',//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    open:true
  },
  module:{
    rules:[
      {
        test:/(\.jsx|\.js)$/,
        use:{
          loader:"babel-loader",
          options:{
            presets:['env','react']
          }
        },
        exclude:/node_modules/
      },
      {
        test:/\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
