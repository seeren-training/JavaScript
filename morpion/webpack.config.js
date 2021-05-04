const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: [
        './src/app.js',
        './src/app.scss',
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader',
            },
        ],
    },
    watchOptions: {
        ignored: [
            '/node_modules/',
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({ 
            filename: 'app.css' 
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: [
                './index.html',
                './src/*'
            ],
            server: {
                baseDir: './',
                middleware: (req, res, next) => (-1 === req.url.indexOf('.') && '/' !== req.url
                    ? res.end(res.writeHead(302, { Location: '/' }))
                    : next()),
            },
        }),
    ],
};