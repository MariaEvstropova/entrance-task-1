var webpack = require('webpack');

module.exports = {
    entry: "./src/main.jsx",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "/showtest/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000&mimetype=image/png"
            },
            {
                test: /\.svg/,
                loader: "url-loader?limit=26000&mimetype=image/svg+xml"
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/],
                query:
                      {
                        presets:['es2015','react']
                      }
            }
        ]
    }
}
