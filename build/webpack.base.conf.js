var path = require('path')
var config = require('../config')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
    entry: {
        'vue-bootstrap': './src/index.js'
    },
    output: {
        library: 'VueBootstrap',
        path: config.build.assetsRoot,
        publicPath: config.build.assetsPublicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            src: path.resolve(__dirname, '../src')
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
}
