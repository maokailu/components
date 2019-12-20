// postcss.config.js
module.exports = {
    syntax: 'postcss-scss',
    plugins: [
        require('autoprefixer'),
        require('stylelint')
    ]
};
