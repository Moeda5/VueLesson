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
</template>

<script>
import {ref,reactive, toRef ,toRefs,readonly,shallowReadonly} from 'vue'
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
        // person = readonly(person)
        person = shallowReadonly(person)
        return {
            sum,
            salary:toRef(person.job.J1,'salary'),
            ...toRefs(person)
        }
    },

}
</script>

<style>

</style>