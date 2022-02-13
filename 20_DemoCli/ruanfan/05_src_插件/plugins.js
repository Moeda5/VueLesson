export default {
    install(Vue,x,y,z){
        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        //给Vue原型上添加一个方法
        Vue.prototype.hello = ()=>{alert('这是插件添加的方法'+x+y+z)}

    }
}