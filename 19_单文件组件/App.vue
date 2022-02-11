<template>
    <div>
        <school></school>
        <student></student>
    </div>
</template>

<script>
    //App是汇总组件  所要引入子组件
    import School from "./School.vue"
    import Student from "./Student.vue"

    export default {
        name:"App",
        components:{
            School,
            Student
        }
    }
</script>

<style>

</style>