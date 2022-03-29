<template>
    <h4>当前的求和为：{{sum}}</h4>
    <button @click="sum++">点我++</button>
    <hr>
    <h2>name:{{name}}</h2>
    <h2>age:{{age}}</h2>
    <h2>salary:{{salary}}</h2>
    <button @click="name+='~'">changeName</button>
    <button @click="age++">changeAge</button>
    <button @click="salary++">AddSalary</button>
    <button @click="showRawPerson">输出最原始的person</button>
</template>

<script>
import {ref,reactive, toRef ,toRefs,toRaw} from 'vue'
export default {
    name: 'Demo',
    setup(){
        //数据
        let sum = ref(0)
        let person = reactive({
            name:'张三',
            age:18,
            job:{
                J1:{
                    salary:20
                }
            }
        })
        function showRawPerson(){
            const p = toRaw(person)
            console.log(p)
        }
        return {
            sum,
            salary:toRef(person.job.J1,'salary'),
            ...toRefs(person),
            showRawPerson
        }
    },

}
</script>

<style>

</style>