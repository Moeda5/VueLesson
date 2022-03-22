<template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">点我加1</button>
    <hr>
    <h2>当前的信息为：{{msg}}</h2>
    <button @click="msg+= '!'">修改信息</button>
    <br>
    <h2>name:{{person.name}}</h2>
    <h2>age:{{person.age}}</h2>
    <h2>salary:{{person.job.J1.salary}}</h2>
    <button @click="person.name+='~'">changeName</button>
    <button @click="person.age++">changeAge</button>
    <button @click="person.job.J1.salary++">AddSalary</button>
</template>

<script>
import {ref,reactive,watch,watchEffect} from 'vue'
export default {
    name: 'Demo',
    setup(){
        //数据
        let sum = ref(0)
        let msg = ref('你好啊')
        let person = reactive({
            name:'张三',
            age:18,
            job:{
                J1:{
                    salary:20
                }
            }
        })
        //  监视ref所定义的一个响应式数据
        // watch(sum,(newValue,oldValue)=>{
        //     console.log('sum的值变化了',newValue,oldValue)
        // },{immediate:true})

        //不用指明监视的哪个属性，监视的回调中用到哪个属性，那就监视哪个属性
        watchEffect(()=>{
            const x1 = sum.value
            console.log('watchEffect所指定的回调执行了')
        })

        return {
            sum,
            msg,
            person
        }
    }  
}
</script>

<style>

</style>