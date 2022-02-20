<template>
    <div>
        <li>
            <label>
                <input type="checkbox" :checked='todoobj.done' @change="handleCheck(todoobj.id)" />
                <span>{{ todoobj.title }}</span>
            </label>
            <button class="btn btn-danger" @click="handleDelete(todoobj.id)">删除</button>
        </li>
    </div>
    
</template>

<script>
    export default {
        name:'Item',
        props:['todoobj'],
        methods: {
            //勾选
            handleCheck(id){
                //通知App组件将对应的todo对象的done值取反
                // this.checkTodo(id)
                this.$bus.$emit('checkTodo',id)
            },
            //删除
            handleDelete(id){
                if(confirm('你确定删除么？')){
                    this.$bus.$emit('deleteTodo',id)
                }
            }
        }
    }
    
</script>

<style scoped>
    /*item*/
    li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    }

    li label {
    float: left;
    cursor: pointer;
    }

    li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
    }

    li button {
    float: right;
    display: none;
    margin-top: 3px;
    }

    li:before {
    content: initial;
    }

    li:last-child {
    border-bottom: none;
    }

    li:hover{
        background-color: #ddd;
    }

    li:hover button{
        display: block;
    }
</style>