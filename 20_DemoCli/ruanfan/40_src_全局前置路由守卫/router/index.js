//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'


const router = new VueRouter({
    routes:[
        //一级路由
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            //二级路由
            children:[
                {
                    name:'xinwen',
                    path:"news",
                    component:News,
                },
                {
                    name:'xiaoxi',
                    path:"message",
                    component:Message,
                    //三级路由
                    children:[
                        {
                            name:'xiangqing',
                            path:"detail",
                            component:Detail,
                        //props的第一种写法，值为对象,
                        //该对象所有key-value都会以props的形式传给Detail组件
                            // props:{a:1,b:'hello'}

                        //props的第一种写法,值为布尔值，若布尔值为真，
                        //就会吧该路由组件收到的所有params参数，以props的形式传给Detail组件
                        // props:true

                        //props的第三种写法，值为函数
                            // props($route){
                            //     return {
                            //         id:$route.query.id,
                            //         title:$route.query.title
                            //     }
                            // }
                            
                        }
                    ]
                },
            ]
        }
    ]
})
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

export default router