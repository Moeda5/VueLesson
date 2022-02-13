<template>
    <div>
        <h2>学生名：{{ name | mySlice }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="test">点我测试插件hello方法</button>
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
            test(){
                this.hello()
            }
        }
    }
</script>