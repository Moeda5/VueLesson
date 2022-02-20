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

## 配置项props
<!-- 
太长了，不想写了。自己看03吧
 -->

## mixin(混入)
<!-- 
    功能:可以吧多个组件共用的配置提取成一个混入对象
    使用方式:
        第一步定义混合,例如:
        export const weilefangzhiniyunsuoyiqilegezhegemingzi = {
            methods: {
            showName(){
                alert(this.name)
        }
    },
}
        第二步使用混入,例如:
        1.全局混入: Vue.mixin(xxx)
        2.局部混入：mixins:['xxx']

 -->

 ## 插件
<!-- 
    功能:用于增强Vue
    本质包含install方法的一个对象,install的第一个参数是Vue,第二个以后的参数是插件使用者传递的数据.
    定义插件:详见plugins.js
 -->

 ## scoped样式
<!-- 
    作用：让样式布局在局部生效，防止冲突
    写法：<style scoped>
 -->

 ## 项目案例
 <!-- 太长了 不写了 自己看文件 -->

 ## webStorage
 <!-- 太长了 不写了 自己看文件 -->

 ## 12_src_全局事件总线（GlobalEventBus）
  <!-- 
    1.一种组件间的通信方式，适用于任意组件间通信。

    2.安装全局事件总线：
    new Vue({
        .......
        beforeCreate(){
            Vue.prototype.$bus = this//安装全局事件，$bus就是当前应用的vm
        }，
        ......
    })
  
    3.使用事件总线：
        1.接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身
            methods(){
                demo(data){....}
            }
            ......
            mounted() {
                this.$bus.$on('xxxx',this.demo)
            }
        2.提供数据：this.$bus.$emit('xxxx',数据)

    4.最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件

   -->

   ## 消息订阅与发布（pubsub）
   <!-- 
    1.一种组件间通信的方式，适用于任意组件通信
    2.使用步骤：
        1.安装pubsub： npm i pubsub-js
        2.引入：import pubsub from 'pubsub-js'
        3.接受数据：A组件想接受数据，则在A组件中订阅消息，订阅的回调留在A组件自身
        methods(){
            demo(data){.......}
        }
        .........
        mounted(){
            this.pubId = pubsub.subscribe('xxx',this.demo)//订阅消息 
        }
        4.发布消息：pubsub.publish('xxx',数据)
        5.最好在beforeDestroy钩子中，用pubsub.unsubscribe(this.pubID)取消订阅
    -->

## nextTick
<!-- 
    nextTick 会在下一次DOM更新之后再回调
        this.$nextTick(
            ()=>this.$refs.inputTitle.focus()
        )
-->