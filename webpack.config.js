const path = require('path');

module.exports = {
    mode: 'development',
    entry: [ './js/content/main.js', './js/content/plugins.js' ],
    devtool: 'inline-source-map',
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'

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

