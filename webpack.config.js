const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

/** @returns {webpack.Configuration} */
module.exports = (env, conf) => ({
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    module: {
        rules: [
            { test: /(\.jsx|\.js)/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.css/, use: ['style-loader', 'css-loader'] },
        ],
    },
    devtool: 'source-map',
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlPlugin(
            conf.mode === 'development'
                ? { template: './src/index.html' }
                : { filename: '../index.html', template: './src/index.html' },
        ),
    ],
});
