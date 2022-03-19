const express = require('express')
const res = require('express/lib/response')

//解决history 不能刷新问题
//首先要在服务器装一个包 命令如下
//npm i connect-history-api-fallback
//然后在这里添加使用代码
const history = require('connect-history-api-fallback');

const app = express()
//history 必须在静态之前使用
app.use(history())
app.use(express.static(__dirname+'/static'))

app.get('/person',(request,response)=>{
    response.send({
        name:'tom',
        age:18
    })
})

app.listen(5005,(err)=>{
    if (!err) {
        console.log('服务器启动成功了！')
    }
})