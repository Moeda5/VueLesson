<template>
    <div class="student">
        <h2>学生名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑ruanfan事件</button>
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
                //触发第二个事件
                this.$emit('demo')
            },
            unbind(){
                // this.$off('ruanfan') //解绑一个触发事件
                // this.$off(['ruanfan','demo']) //解绑2个触发事件
                this.$off()//解绑所有的自定义事件
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