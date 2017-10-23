module.exports = {
  entry: "./src/main.jsx",
  output: {
    path: __dirname + '/src/',
    filename: "browser.js"
  },
  module: {
    rules: [
      {
        test: /\.(jsx|es6)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.es6']
  }
};
