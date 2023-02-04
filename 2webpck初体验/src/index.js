import data from './data.json'
// import './index.less'
console.log(data)
function add(x,y){
    return x+y
}

console.log(add(1,2))
/*
webpack可以处理js和JSON资源，不能处理css,less和图片资源
生产和开发环境能将ES6模块化编译成浏览器能识别的模块化
* 开发环境打包命令
* >webpack ./index.js -o ./build/built.js --mode=development

* 生产环境 比开发环境多了压缩js代码功能
* webpack ./index.js -o ./build/built.js --mode=production
*
* */