module.exports = {
    pages:{
        index: {
            //入口
            entry: 'src/main.js',
        },
    },
    //关闭语法检查
    lintOnSave:false,
    //开启代理服务器
    devServer: {
        proxy: 'http://localhost:5000'
      }
}