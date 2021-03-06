const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
            "./src/index.js",
              // 'react-hot-loader/patch', // RHL patch
            ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      // {
      //   test: /\.jsx?$/,
      //   include: /node_modules/,
      //   use: ['react-hot-loader/webpack'],
      // },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ],
  
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
// Pay really close attention here: output.publicPath and
//  devServer.publicPath are different.
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};