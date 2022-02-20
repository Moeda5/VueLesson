<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- top用了自定义组件方法 -->
                <top @receive="receive"></top>
                <list :todos='todos'></list>
                <down :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></down>
            </div>
        </div>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    import Top from './components/Top'
    import List from './components/List'
    import Down from './components/Down'


    export default {
        name:'App',
        components:{
           Top,
           List,
           Down,      
        },
        data() {
            return {
                //读   这个 或 的意思是第一次打开页面 为null时 这个不为真时 这里就是空数组 这样之后的.length才是0
                todos:JSON.parse(localStorage.getItem('todos')) || []
            }
        },
        methods: {
            receive(todoobj){
                this.todos.unshift(todoobj)
            },
            //勾选or取消勾选一个todo
            checkTodo(id){
                this.todos.forEach((todo)=>{
                    if (todo.id === id) {
                        todo.done = !todo.done
                    }
                })
            },
            //改
            updateTodo(id,title){
                this.todos.forEach((todo)=>{
                    if (todo.id === id) {
                        todo.title = title
                    }
                })
            },
            //删除一个todo  这个下划线是占位用的 意思是收msgName但是不用
            deleteTodo(_,id){
                this.todos = this.todos.filter((todo)=>{
                    return todo.id !== id
                })
            },
            //全选或全不选
            checkAllTodo(done){
                this.todos.forEach((todo)=>{
                    todo.done = done
                })
            },
            //清除所有已经完成的todo
            clearAllTodo(){
                this.todos = this.todos.filter((todo)=>{
                    return !todo.done
                })
            }
        },
        watch:{
            //存 以下为简写形式 只能监视 对象外层变化  里层比如说done的变化监视不到
            // todos(newvalue){
            //     localStorage.setItem('todos',JSON.stringify(newvalue))
            // }

            //以下为深度监视方法
            todos:{
                deep:true,
                handler(newvalue){
                    localStorage.setItem('todos',JSON.stringify(newvalue))
                }
            }
        },
        mounted() {
            this.$bus.$on('checkTodo',this.checkTodo)
            this.$bus.$on('updateTodo',this.updateTodo)
            //订阅一个消息  并拿到这个订阅的ID方便之后取消订阅
            this.pubId = pubsub.subscribe('deleteTodo',this.deleteTodo)
        },
        beforeDestroy() {
            this.$bus.$off('checkTodo')
            this.$bus.$off('updateTodo')
            //取消一个订阅
            pubsub.unsubscribe('this.pubId')
        }
    }
</script>

<style>
    /*base*/
    body {
    background: #fff;
    }
    .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    }
    .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
    }
    .btn-edit {
    color: #fff;
    background-color: skyblue;
    border: 1px solid rgb(3, 142, 197);
    margin-right: 5px;
    }
    .btn-edit:hover{
    color: #fff;
    background-color: rgb(8, 137, 189);
    border: 1px solid rgb(3, 142, 197);
    margin-right: 5px;
    }
    .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
    }
    .btn:focus {
    outline: none;
    }
    .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }
</style>