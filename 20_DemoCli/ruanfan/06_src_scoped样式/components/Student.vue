<template>
    <div class="demo">
        <h2>学生名：{{ name }}</h2>
        <h2 class="fs">学生性别：{{ sex }}</h2>
        
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:"某个追寻财富自由的有志青年",
                sex:"男",
            }
        },
        methods:{
          
        }
    }
</script>

<style lang="less" scoped>
    .demo{
        background-color: rgb(111, 3, 199);
        .fs{
            font-size: 40px;
        }
    }
</style>