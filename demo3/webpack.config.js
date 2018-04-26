module.exports = {
  entry: './main.jsx',
  output:{
    filename:'bundle.js'
  },
  module: {
    rules: [
      {
        test:/(\.jsx|\.js)$/,
        use:{
          loader: "babel-loader",
          options:{
            presets: ['env', 'react']
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}
