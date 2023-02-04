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
            {
                //排除特定文件
                exclude: /\.(css|js|html|less)$/,
                loader: 'file-loader'
            },
            //处理HTML文件中的图片(html-loader引入img 从而被url-loader处理)
            {
                test: '/\.html$/', loader: 'html-loader'
            }
        ]
    },
    plugins: [
        //功能 默认创建一个空的HTML文件，可以添加参数指定在哪个文件上来引入 自动引入打包输出的所有资源(js/css)
        new HtmlWebpackPlugin({
            //复制该路径下的html文件，并自动引入打包输出的所有资源(js/css)
            template: './src/index.html'
        })
    ],
    mode: 'development'
}
