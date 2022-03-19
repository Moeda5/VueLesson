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

## 代理
<!-- 
    写在了vue.config.js 和 App.vue中
 -->

## 插槽

<!-- 太长了自己看文件 -->

## Vuex
<!-- 
    1.概念
        在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。
    
    2.何时使用？
        多个组件需要共享数据时

    3.搭建vuex环境
    1.创建文件：src/store/index.js
        //该文件用于创建Vuex中最为核心的store

        import Vue from 'vue'
        //引入Vuex
        import Vuex from 'vuex'
        //使用
        Vue.use(Vuex)

        //准备actions————用于响应组件中的动作
        const actions = {}
        //准备mutations————用于操作数据（state）
        const mutations = {}
        //准备state————用于存储数据
        const state = {}


        //创建store 暴露store
        export default new Vuex.Store({
            actions,
            mutations,
            state,
        })

    2.在main.js中创建vm时传入store配置项
        ......
        //引入store
        import store from './store/index'

        .......


        new Vue({
        //也可以不要mount 用这种写法
            el:"#app",
            //将APP组件放入容器中
            render: h => h(App),
            store,
            ......
        })

    110.
        2.组件中读取vuex中的数据：$store.state.sum
        3.组件中修改vuex中的数据：$store。dispatch('action中的方法名'，数据)或$store.commit('mutaitions中的发发明',数据)
        备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写dispatch，直接编写commit

    mapState 用于帮助我们映射State
    ,mapGetters, 用于帮助我们映射Getters
    
    mapMutations, 同上  备注mapMutations mapActions 如果需要传递数据
    mapActions，同上    需要在模板绑定事件时传递好参数 （具体看代码就是把n传进去了 xxxx（n） 而不能直接xxxx）


 -->

 ## Router
 <!-- 
    1.安装vue-router， 命令： npm i vue-router

    2.应用插件：Vue.use(VueRouter)    写在main里

    3.编写router配置项：src\router\index.js
        //该文件专门用于创建整个应用的路由器
        
        //引入VueRouter
        import VueRouter from "vue-router";

        import About from '../components/About'
        import Home from '../components/Home'
        //创建并暴露一个路由器
        export default new VueRouter({
            routes:[
                {
                    path:'/about',
                    component:About
                },
                {
                    path:'/home',
                    component:Home
                }
            ]
        })

    4.实现切换 active-class 可配置高亮样式
        <router-link class="list-group-item" active-class="active" to="/about" >About</router-link>

    5.指定展示位置
        <router-view></router-view>
  -->

## 编程式路由导航
<!-- 
    this.$router.push({
        name:'xiangqing',
        query:{
            id:m.id,
            title:m.title
        }
    })

    replaceShow(m){
        this.$router.replace({
            name:'xiangqing',
            query:{
                id:m.id,
                title:m.title
            }
        })
    }

    this.$router.forward()
    this.$router.back()
    this.$router.go()
 -->

## 缓存路由组件
 <!-- 
    这里这个名字是组件名 就是export default 里面那个name
    <keep-alive include="News">
        <router-view></router-view>
    </keep-alive>

    如果缓存多个，但又不全部缓存可以写成数组
    <keep-alive :include="['News','Message']">
        <router-view></router-view>
    </keep-alive>
-->

## 两个新的生命周期钩子 
<!-- 
    //激活  
    activated(){
        this.timer = setInterval(() => {
            this.opacity -= 0.01
            if (this.opacity <= 0) this.opacity = 1
        },16) 
    },
    //失活
    deactivated(){
        clearInterval(this.timer)
    }
 -->

## 全局前置路由守卫
<!-- 
    //全局前置路由守卫————初始化的时候被调用，每次路由切换之前被调用
    router.beforeEach((to,from,next)=>{
        console.log(to,from)
        //这里也可以用name判断   to.name === 'xinwen'
        if (to.path === '/home/news' || to.path === '/home/message') {
            if(localStorage.getItem('school')==='ruanfan'){
                next()
            }else{
                alert('学校名不对，无权限查看')
            }
        }else{
            next()
        }
    })
 -->

 ## 全局后置路由守卫
 <!-- 
    //全局后置路由守卫————初始化的时候被调用，每次路由切换之后被调用
    router.afterEach((to,from)=>{
        console.log('后置路由守卫',to,from)
        document.title = to.meta.title || '软饭系统'
    })
  -->
## 独享路由守卫
<!-- 
    children:[
        {
            name:'xinwen',
            path:"news",
            component:News,
            meta:{isAuth:true,title:'新闻'},
            //独享路由守卫 注意只有前置 没有后置
            beforeEnter: (to,from,next) => {
                if (to.meta.isAuth) {//判断是否需要鉴权
                    if(localStorage.getItem('school')==='ruanfan'){
                        //给每个路由标签名 这个东西也能放全局后置路由守卫里
                        //document.title = to.meta.title || '软饭系统'
                        next()
                    }else{
                        alert('学校名不对，无权限查看')
                    }
                }else{
                    //给每个路由标签名 这个东西也能放全局后置路由守卫里
                    //document.title = to.meta.title || '软饭系统'
                    next()
                }
            }
        },
 -->

## 组件内守卫
<!-- 
    //通过路由规则，进入该组件时被调用
    beforeRouteEnter (to, from, next) {
        
    },
    //通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
        
    }
-->

## 路由器的两种工作模式
<!-- 
    1.对于一个URL来说，什么是hash值？————#及其后面的就是hash值
    2.hash值不会包含在HTTP请求中，即：hash值不会带给服务器
    3.hash模式
        1.地址中永远带着#，不美观
        2.若以后见地址通过第三方手机分享，若APP校验严格，则地址会被标记为不合法
        3.兼容性较好
    4.history模式
        1.地址干净，美观。
        2.兼容性和hash模式相比略差
        3.应用部署上线时需要后端人员支持，解决刷新页面服务器404的问题
    
    5.npm run build  这个是打包命令
    另外本课附带了怎么做一个简单的服务器方法。
 -->