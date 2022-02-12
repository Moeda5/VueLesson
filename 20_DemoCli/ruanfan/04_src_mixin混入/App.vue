<template>
    <div>
        <!--如果要传int类型 必须加：这样会把引号中的运算结果传走 
            否则默认传的就是字符串，在接收方不方便做计算
        -->
        <school></school>
        <student></student>
        <br>
    </div>
</template>

<script>
    //App是汇总组件  所要引入子组件
    import School from "./components/School"
    import Student from "./components/Student"

    export default {
        name:'App',
        components:{
            School,
            Student
        },
    }
</script>

<style>

</style>