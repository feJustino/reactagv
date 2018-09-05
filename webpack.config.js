const webpack = require('webpack')

module.exports = {
    entry: './src/index.jsx',
    output:{
        path: __dirname + '/dist',
        filename:'./bundle.js'
    },
    devServer:{
        port: 8080,
        contentBase: './dist',
    },
    resolve:{
        extensions: ['', '.js', '.jsx']
    },
    module:{
        preLoaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'standard'
          }],
        loaders:[{
            test:/.jsx?$/,
            loader:'babel-loader',
            exclude: /node_modules/,
            query:{
                presets: ['es2015','react']
            }                   
        }]
    }
}