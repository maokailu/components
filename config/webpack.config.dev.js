const path = require('path');
const base = require('./webpack.config.base.js');
const merge = require('webpack-merge');


module.exports = merge(base, {
    devtool: 'source-map',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.json', 'ts', 'tsx'],
        alias: {
            'components': path.resolve('src/components')
        }
    },
    devServer: {
        host: '127.0.0.1',
        disableHostCheck: true,
        contentBase: path.resolve('src/assets'),
        port: 8889,
        open: true,
        // https: true,
        inline: true,
        hot: true
    }
});
