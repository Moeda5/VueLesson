<template>
    <div>
        <ul class="todo-main">
            <item v-for="todoobj in todos" :key="todoobj.id" :todoobj='todoobj'></item>
        </ul>
    </div>
</template>

<script>
    import Item from './Item'

    export default {
        name:'List',
        components: { Item },
        data() {
            return {
                todos:[
                    {id:'001',title:'抽烟',done:true},
                    {id:'002',title:'喝酒',done:false},
                    {id:'003',title:'开车',done:true},
                ]
            }
        },
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