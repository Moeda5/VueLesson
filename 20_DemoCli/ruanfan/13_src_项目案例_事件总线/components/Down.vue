<template>
    <div class="todo-footer" v-show="this.todos.length">
                <label>
                <input type="checkbox" :checked="isAll" @change="checkAll"/>
                </label>
                <span>
                <span>已完成{{doneTotal}}</span> / 全部{{ todos.length }}
                </span>
                <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:'Down',
        props:['todos','checkAllTodo','clearAllTodo'],
        computed: {
            doneTotal(){
                //一般写法
                // let i = 0
                // this.todos.forEach((todo)=>{
                //     if (todo.done) {
                //         i++
                //     }
                // })
                // return i

                //高端写法  pre为前值  current为当前值 current 就是每一个todo
                return this.todos.reduce((pre,current)=>{
                    return pre + (current.done ? 1 : 0)
                },0)
                //注意 上面这个0 是初始值
            },
            isAll(){
                if (this.doneTotal === this.todos.length && this.todos.length > 0) {
                    return true
                } else {
                    return false
                }
            }
        },
        methods:{
            checkAll(e){
                this.checkAllTodo(e.target.checked)
            },
            clearAll(){
                this.clearAllTodo()
            }
        }
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }
</style>