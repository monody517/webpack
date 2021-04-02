var HtmlWebpackPlugin = require('html-webpack-plugin');
const { basename } = require('path');
var path = require('path');

module.exports = {  
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "webpack",
        template:'src/assets/index.html'
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.styl$/,
          loader: [
            "style-loader",
            "css-loader",
            "stylus-loader"
          ],
        },
        {
          test: /\.less$/i,
          loader: [
            "style-loader",
            "css-loader",
            "less-loader",
          ],
        },
        {
          test: /\.scss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            {
              loader:"sass-loader",
              options:{implementation:require("dart-sass")}
            },
          ],
        },      
      ],
    },
  };