<template>
    <div>
        <img src="./assets/logo.png" alt="logo" >
        <school></school>
        <student></student>
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
        }
    }
</script>

<style>

</style>