module.exports = {
  entry:__dirname + '/app/main.js',
  output: {
    path:__dirname + '/app',
    filename:'bundle.js'
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
      },
      {
        test: /\.(png|jpg|gif|JPG)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}
