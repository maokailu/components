const path = require('path');
const base = require('./webpack.config.base.js');
const merge = require('webpack-merge');


module.exports = merge(base, {
    devtool: 'eval-source-map',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.json', 'ts', 'tsx'],
        alias: {
            'button': path.resolve('src/components/button'),
            'tab': path.resolve('src/components/tab'),
            'loading': path.resolve('src/components/loading'),
            'toast-portals': path.resolve('src/components/toast/toast-portals'),
            'toggle': path.resolve('src/components/toggle'),
            'icon': path.resolve('src/components/icon')
        }
    },
    devServer: {
        contentBase: path.resolve('src/assets'),
        port: 8889,
        inline: true,
        hot: true
    }
});
