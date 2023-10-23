const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

/**@type {import('webpack').Configuration}*/
module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            exposes: {
                './CartShow': './src/index'
            }
        }),

        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
} 