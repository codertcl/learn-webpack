const {resolve} = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            //处理less 样式打包到了js文件中
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            //css 样式打包到了js文件中
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            //处理图片资源
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 300 * 1024,
                    name: '[hash:10].[ext]',
                    esModule: false,
                    outputPath: 'images'
                },
            },
            //处理HTML中的图片
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    outputPath: 'images'
                }
            },
            //处理其他资源
            {
                exclude: /\.(js|html|less|css|jpg|png|jpeg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'media'
                }
            },
        ]
    },
    //
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        //监视 contentBase 目录下的所有文件，一旦文件变化就会 reload
        contentBase: resolve(__dirname, 'build'),
        //启动gzip压缩
        compress: true,
        open: true,
        port: 3000,
    }
}