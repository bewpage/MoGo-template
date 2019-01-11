const path = require('path');
const glob = require('glob');

module.exports = {
    mode: 'development',
    entry: {
        filename: glob.sync('js/content'),
        path: path.resolve(__dirname, 'js')
    },
    devtool: 'inline-source-map',
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    output: {
        filename: "./build/out.js",
        path: path.resolve(__dirname, 'js')
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};

