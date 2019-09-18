const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const { resolve } = require('path');


/** @type {webpack.Configuration} */
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            { test: /(\.jsx|\.js)/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.css/, use: ['style-loader', 'css-loader']}
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlPlugin()
    ],
};