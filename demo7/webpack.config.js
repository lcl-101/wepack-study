module.exports = {
  entry: __dirname + '/app/main.js',
  output:{
    path: __dirname + '/app',
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
  plugins:[]
}
