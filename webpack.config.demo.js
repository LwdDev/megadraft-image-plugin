/*
 * Copyright (c) 2017, Itai Reuveni <itaireuveni@gmail.com>
 *
 * License: MIT
 */

module.exports = {
  entry: [
    "babel-polyfill",
    "./demo/main.js",
  ],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "demo/bundle.js"
  },
  devtool: "source-map",
  devServer: {
    inline: true,
    contentBase: "./"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.json$/,
        loader: "json"
      }
    ]
  }
};
