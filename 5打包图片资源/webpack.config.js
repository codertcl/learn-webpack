const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
//打包css.less使用 module中的loader
//打包HTML使用plugin中的插件html-webpack
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            //默认无法处理HTML中图片 需要额外添加html-loader
            {
                test: /\.(jpe?g|png|svg|gif)$/,
                //多个loader使用use
                //url-loader 可以将较小的文件，转成base64的URI
                loader: 'url-loader',
                options: {
                    //图片小于8kb,就会使用base64格式处理 不会显示在build文件夹中
                    //减少请求数量所以减轻了服务器压力，但会导致图片体积变大 文件请求速度更慢
                    limit: 300 * 1024,
                    //避免小于limit的大小的图片名字变为hash值后文件名过长，下面进行重命名
                    //取hash值前十位，并显示原来的后缀名
                    name: '[hash:10].[ext]',
                    // url-loader默认使用es6模块解析 html-loader使用common.js
                    // 如遇无法显示问题可关闭url-loader的es6模块化 使用common.js解析
                    esModule:false
                }
            },
            //处理HTML文件中的图片(html-loader引入img 从而被url-loader处理)
            {
                test: '/\.html$/',
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        //引入的为类
        //功能 默认创建一个空的HTML文件，可以添加参数指定在哪个文件上来引入 自动引入打包输出的所有资源(js/css)
        new HtmlWebpackPlugin({
            //复制该路径下的html文件，并自动引入打包输出的所有资源(js/css)
            template: './src/index.html'
        })
    ],
    mode: 'development'
}
