搭建一个简单服务器的手顺
该方法是用express框架搭建一个服务器

1.在新建的文件夹下运行 npm init 把它变成一个合法的包
名字随便取，剩下的一路回车就行

2.npm i express 安装express框架

3.在这个文件夹下新建一个server.js文件
具体怎么写，看代码

4.之后 node server 启动服务器

5.前端打包好的文件放在static里面（有时候叫public）

6.如果你的vue router 用的是history模式 那么你需要在服务器端配置一个node.js中间件 JAVA也有类似方法
connect-history-api-fallback

命令 npm i connect-history-api-fallback

然后在server.js里引入
var history = require('connect-history-api-fallback');
还得在server.js里应用 详情看server.js
