const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');


module.exports = {
   mode: "development",
   devtool: "eval",
   entry: {
      app: './src/index.js'
   },
   output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './dist'),
      publicPath: '/dist'
   },
   module: {
      rules: [
         {
            test: /\.s[ac]ss$/i,
            use: [
               MiniCssExtractPlugin.loader,
               { loader: "css-loader", },
               { loader: "postcss-loader", options: {
                  postcssOptions: {
                     config: path.resolve(__dirname, 'postcss.config.js')
                  }
               }},
               { loader: "sass-loader" }
            ],
         },
         {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
         },
         {
            test: /\.m?js$/, 
            exclude: /(node_modules|bower_components)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
         {
            test: /\.(png|jpg|jpeg|svg)$/i,
            use: {
               loader: 'url-loader'
            }
         }
      ]
   },
   devServer: {
      contentBase: path.join(__dirname, 'dist'),
      overlay: {
         warnings: true,
         errors: true
      },
      port: 8080,
      liveReload: true,
      open: true,
      watchContentBase: true
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: '[name].css',
      })
   ], 
}