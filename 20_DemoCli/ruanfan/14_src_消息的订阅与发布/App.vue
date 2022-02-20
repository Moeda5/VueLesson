<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <school/>
        <student/>
    </div>
</template>

<script>
    import School from "./components/School"
    import Student from "./components/Student"

    export default {
        name:'App',
        components:{
            School,
            Student,
        },
        data() {
            return {
                msg:"泥猴哇"
            }
        }
    }
</script>

<style>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>