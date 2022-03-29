<template>
    <h4>当前的x.y值是：{{x.y}}</h4>
    <button @click="x.y++">点我x.y+1</button>
    <hr>
    <h2>name:{{name}}</h2>
    <h2>age:{{age}}</h2>
    <h2>salary:{{salary}}</h2>
    <button @click="name+='~'">changeName</button>
    <button @click="age++">changeAge</button>
    <button @click="salary++">AddSalary</button>
</template>

<script>
import {ref,reactive, toRef ,toRefs,shallowReactive,shallowRef} from 'vue'
export default {
    name: 'Demo',
    setup(){
        //数据
        // let person = shallowReactive({//只考虑第一层数据的响应式
        let person = reactive({
            name:'张三',
            age:18,
            job:{
                J1:{
                    salary:20
                }
            }
        })
        // let x = ref({
        let x = shallowRef({
            y : 0
        })
        return {
            x,
            salary:toRef(person.job.J1,'salary'),
            ...toRefs(person)
        }
    },

}
</script>

<style>

</style>