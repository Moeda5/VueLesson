module.exports = {
    pages:{
        index: {
            //入口
            entry: 'src/main.js',
        },
    },
    //关闭语法检查
    lintOnSave:false,
    //开启代理服务器 （方式一）
    // devServer: {
    //     proxy: 'http://localhost:5000'
    //   }

    //开启代理服务器 （方式二） 加/api 就是制定代理服务器走代理而不是本地拿
    //  这个/api 请求前缀也可以写成别的 只要是这个/xxx  就去/xxx拿
    // devServer: {
    //     proxy: {
        //   '/api': {
            // '/ruanfan': {
                // target: 'http://localhost:5000',
                //用正则把/ruanfan替换为空字符串再去服务器请求
                // pathRewrite:{'^/ruanfan':''},
                // ws: true,//用于支持websocket
                // changeOrigin: true //请求来自于哪里 true的话服务器会说谎说是5000
            // },
            // '/foo': {
            //     target: '<other_url>'
            // }
            // '/demo': {
            //     target: 'http://localhost:5001',
                //用正则把/ruanfan替换为空字符串再去服务器请求
            //     pathRewrite:{'^/demo':''},
            //     ws: true,//用于支持websocket
            //     changeOrigin: true //请求来自于哪里 true的话服务器会说谎说是5000
            // },
//         }
//     }
}