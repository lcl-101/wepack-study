module.exports = {
  entry:'./main.js',
  output:{
    filename:'bundle.js'
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
