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
            component:About,
            meta:{title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            //二级路由
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
                {
                    name:'xiaoxi',
                    path:"message",
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    //三级路由
                    children:[
                        {
                            name:'xiangqing',
                            path:"detail",
                            component:Detail,
                            meta:{isAuth:true,title:'详情'},
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
// router.beforeEach((to,from,next)=>{
//     console.log('前置路由守卫',to,from)
    
//     //这里也可以用name判断   to.name === 'xinwen'
//     if (to.meta.isAuth) {//判断是否需要鉴权
//         if(localStorage.getItem('school')==='ruanfan'){
//             //给每个路由标签名 这个东西也能放全局后置路由守卫里
//             //document.title = to.meta.title || '软饭系统'
//             next()
//         }else{
//             alert('学校名不对，无权限查看')
//         }
//     }else{
//         //给每个路由标签名 这个东西也能放全局后置路由守卫里
//         //document.title = to.meta.title || '软饭系统'
//         next()
//     }
// })

//全局后置路由守卫————初始化的时候被调用，每次路由切换之后被调用
router.afterEach((to,from)=>{
    console.log('后置路由守卫',to,from)
    document.title = to.meta.title || '软饭系统'
})

export default router