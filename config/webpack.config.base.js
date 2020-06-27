const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        index: path.resolve('src/index.jsx')
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js|tsx|ts)$/,
                use: ['thread-loader', 'babel-loader?cacheDirectory'],
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('src/index.html')
        })
    ]
};
