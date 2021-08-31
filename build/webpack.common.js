const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

const tsImportPluginFactory = require("ts-import-plugin")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
    entry: path.resolve(__dirname, "../src/index.tsx"),
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        mainFiles: ["index"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ],
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory([
                                {
                                    libraryName: "antd",
                                    style: true
                                }
                            ])
                        ]
                    })
                }
            }],
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, "css-loader", {
                loader: "less-loader",
                options: {
                    lessOptions: {
                        javascriptEnabled: true
                    }
                }
            }]
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }]
    }
}