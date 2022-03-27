<template>
    <h2>name:{{name}}</h2>
    <h2>age:{{age}}</h2>
    <h2>salary:{{salary}}</h2>
    <button @click="name+='~'">changeName</button>
    <button @click="age++">changeAge</button>
    <button @click="salary++">AddSalary</button>
</template>

<script>
import {reactive, toRef ,toRefs} from 'vue'
export default {
    name: 'Demo',
    setup(){
        //数据
        let person = reactive({
            name:'张三',
            age:18,
            job:{
                J1:{
                    salary:20
                }
            }
        })

        return {
            // name:toRef(person,'name'),
            // age:toRef(person,'age'),
            salary:toRef(person.job.J1,'salary'),
            ...toRefs(person)
        }
    },

}
</script>

<style>

</style>