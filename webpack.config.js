const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const dev = process.env.NODE_ENV === "development";

module.exports = {
  entry: "./src",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: "babel-loader"
      }
    ]
  },
  plugins: !dev ? [new CopyWebpackPlugin([{ from: "public" }])] : [],
  mode: process.env.NODE_ENV
};
