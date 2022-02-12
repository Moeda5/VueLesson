<template>
    <div class="demo">
        <h2>学生名：{{ name }}</h2>
        <h2>学生地址：{{ address }}</h2>
        <button @click="showName">点我提示学生名</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:"某个追寻财富自由的有志青年",
                address:"东京"
            }
        },
        methods: {
            showName(){
                alert(this.name)
            }
        },
    }
</script>

<style>
    .demo{
        background-color: rgb(122, 10, 150);
    }
</style>