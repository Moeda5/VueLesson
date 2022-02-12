# 脚手架笔记
# p063 _render函数
<!-- 
1.vue.js与vue.runtime.xxx.js的区别
    1.vue.js是完整版的Vue. 包含：核心功能 + 模板解析器
    2.vue.runtime.xxx.js 是运行版的Vue。 只包含：核心功能：没有模板解析器

2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项。需要使用render函数接受到的creatElement函数去指定具体内容。

 -->

## p064 修改默认配置
<!-- vue inspect > output.js
这个命令可以把vue的配置整理成一个output.js 导出出来

lintOnSave:false 
关闭语法检查  使用之前需停掉服务器，需要写在vue.config.js里 这个文件默认是没有的 需要修改默认配置时添加 
具体详情参照尚硅谷p064 第15分钟 或者  https://cli.vuejs.org/zh -->

## ref属性
<!-- 
1.被用来给元素火子组件注册引用信息（id的替代者）
2.应用在HTML标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
3.使用方式：
    打标识  <h1 ref="xxx"></h1>
    获取：this.$refs.xxx
 -->
