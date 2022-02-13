<template>
    <div>
        <ul class="todo-main">
            <item></item>
            <item></item>
            <item></item>
            <item></item>
        </ul>
    </div>
</template>

<script>
    import Item from './Item'

    export default {
    components: { Item },
        name:'List',
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