<template>
    <div class="student">
        <h2>学生名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
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
        methods: {
            sendStudentName(){
                this.$bus.$emit('hello',666)
            }
        }
    }
</script>

<style lang="less" scoped>
    .student{
        background-color: rgb(111, 3, 199);
        padding: 5px;
        margin-top: 30px;
    }
</style>