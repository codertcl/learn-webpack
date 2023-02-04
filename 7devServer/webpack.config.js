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
        //引入的为类
        //功能 默认创建一个空的HTML文件，可以添加参数指定在哪个文件上来引入 自动引入打包输出的所有资源(js/css)
        new HtmlWebpackPlugin({
            //复制该路径下的html文件，并自动引入打包输出的所有资源(js/css)
            template: './src/index.html'
        })
    ],
    mode: 'development',
    //开发服务器 用来自动化(自动化编自动打开浏览器 自动刷新浏览器 避免每次更改代码后还需要手动更新)
    //特点:只会在内存中打包 不会有任何输出
    //启动指令为 npx webpack-dev-server
    devServer:{
        contentBase:resolve(__dirname,'build'),
        // publicPath: "/assets",
        compress:true,//启动gzip压缩
        //端口号
        port:8080,
        //自动打开浏览器
        open:true
    }
}
