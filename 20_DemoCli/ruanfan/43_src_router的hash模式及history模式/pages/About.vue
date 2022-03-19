<template>
    <h2>我是About的内容</h2>
</template>

<script>
    export default {
        name:"About",

        mounted() {

        },
        //通过路由规则，进入该组件时被调用
        beforeRouteEnter (to, from, next) {
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
        },
        //通过路由规则，离开该组件时被调用
        beforeRouteLeave (to, from, next) {
            // ...
            next()
        }
    }
</script>
