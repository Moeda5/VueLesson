<template>
    <div>
        <!--如果要传int类型 必须加：这样会把引号中的运算结果传走 
            否则默认传的就是字符串，在接收方不方便做计算
        -->
        <student
        :age=18 
        sex="男"
        name="某个追寻财富自由的有志青年（帅气）"></student>
        <br>
        <!-- 传的时候属性不能写key ref之类的 -->
        <student
        age=25 
        sex="女"
        name="学姐"></student>
        <br>
        <student
        age=30 
        sex="男"
        name="油头大神"></student>
    </div>
</template>

<script>
    //App是汇总组件  所要引入子组件
    // import School from "./components/School"
    import Student from "./components/Student"

    export default {
        name:'App',
        components:{
            // School,
            Student
        },
    }
</script>

<style>

</style>