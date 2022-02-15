<template>
    <div>
        <ul class="todo-main">
            <item 
                v-for="todoobj in todos" 
                :key="todoobj.id" :todoobj='todoobj' 
                :checkTodo="checkTodo"
                :deleteTodo="deleteTodo"
            ></item>
        </ul>
    </div>
</template>

<script>
    import Item from './Item'

    export default {
        name:'List',
        components: { Item },
        props:['todos','checkTodo','deleteTodo']
    }
</script>

<style scoped>
    /*main*/
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }
</style>