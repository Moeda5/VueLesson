<template>
    <div class="todo-footer">
                <label>
                <input type="checkbox"/>
                </label>
                <span>
                <span>已完成{{doneTotal}}</span> / 全部{{ todos.length }}
                </span>
                <button class="btn btn-danger">清除已完成任务</button>
    </div>
</template>

<script>
    export default {
        name:'Down',
        props:['todos'],
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