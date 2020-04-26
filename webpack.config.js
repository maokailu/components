const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, './src/index.jsx'),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', 'ts', 'tsx'],
        alias: {
            'button': path.resolve(__dirname, './src/components/button'),
            'tab': path.resolve(__dirname, './src/components/tab'),
            'loading': path.resolve(__dirname, './src/components/loading'),
            'toast-portals': path.resolve(__dirname, './src/components/toast/toast-portals'),
            'toggle': path.resolve(__dirname, './src/components/toggle'),
            'icon': path.resolve(__dirname, './src/components/icon')
        }
    },
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        // host: '10.32.84.20',
        host: '127.0.0.1',
        port: 8889,
        clientLogLevel: 'none'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }],
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'awesome-typescript-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|eot|woff|woff2|svg|ttf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        })
    ]
};
