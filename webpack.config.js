const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
     entry: './start.js',
     output: {
         filename: './start.js',
         path: path.resolve(__dirname, 'dist')
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 use: {
                     loader: 'babel-loader',
                     options: {
                         presets: ['@babel/preset-env']
                     }
                 }
             },
             {
                 test: /\.css$/,
                 exclude: /node_modules/,
                 use: ['sass-loader']
             },
             {
                test: /\.png$/,
                exclude: /node_modules/,
                use: ['file-loader']
            },
         ]
     },
     plugins: [
         new HtmlWebPackPlugin({
             template: './src/index.html',
             filename: './index.html'
         })
     ]
}