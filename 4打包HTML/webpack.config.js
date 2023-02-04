const {resolve}=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin');
//打包css less使用 module中的loader
//打包HTML使用plugin中的插件html-webpack
module.exports={
    entry: './src/index.js',
    output:{
        filename:'built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[]
    },
    plugins:[
        //引入的为类
        //功能 默认创建一个空的HTML文件，可以添加参数指定在哪个文件上来引入 自动引入打包输出的所有资源(js/css)
        new HtmlWebpackPlugin({
            //复制该路径下的html文件，并自动引入打包输出的所有资源(js/css)
            template:'./src/index.html',
            filename:'main.html',//生成的HTML文件文件名
            title:'打包HTML',//HTML标题
            inject:'head',//script标签位于html文件的 head中
            favicon: '1.jpg',//HTML图标
        })
    ],
    mode:'development'
}
