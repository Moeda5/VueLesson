<template>
    <div class="student">
        <h2>学生名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStudentName">把学生名给App</button>
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
            sendStudentName(){
                //触发Student组件实例身上的ruanfan事件
                this.$emit('ruanfan',this.name,666,888,999)
            },
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