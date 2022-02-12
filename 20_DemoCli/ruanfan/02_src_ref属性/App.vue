<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDom">点我输出上方的Dom元素</button>
        <school ref="sch"></school>
        <!-- <student></student> -->
    </div>
</template>

<script>
    //App是汇总组件  所要引入子组件
    import School from "./components/School"
    // import Student from "./components/Student"

    export default {
        name:'App',
        components:{
            School,
            // Student
        },
        data() {
            return {
                msg:"222222"
            }
        },
        methods: {
            showDom(){
                console.log(this.$refs.title)
                console.log(this.$refs.btn)
                console.log(this.$refs.sch)
            }
        }
    }
</script>

<style>

</style>