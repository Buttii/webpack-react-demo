const path = require("path")

const { merge } = require("webpack-merge")

const commonConfig = require("./webpack.common")

const TerserPlugin = require("terser-webpack-plugin")

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = merge(commonConfig, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "js/[name][contenthash:8].js",
        clean: true
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                minify: TerserPlugin.uglifyJsMinify,
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false
                    }
                }
            }),
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        "default",
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                }
            })
        ]
    }
})