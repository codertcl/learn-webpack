/**
 * 作用 表明webpack的职责
 * 基于node.js平台运行 默认使用common.js
 */
const {resolve} = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        //_dirname为node.js变量 代表当前文件的目录绝对路径
        path: resolve(__dirname, 'build')
    },
    //loader配置
    module: {
        rules: [
            // 详细loader配置
            // 不同文件必须配置不同loader处理
            {
                // 匹配哪些文件
                test: /\.css$/,
                // 使用哪些loader进行处理
                use: [
                    // use数组中loader执行顺序：从右到左，从下到上 依次执行
                    // 创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 将less文件编译成css文件
                    // 需要下载 less-loader和less
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [],
    mode: 'development'
    // mode: 'production'
}
