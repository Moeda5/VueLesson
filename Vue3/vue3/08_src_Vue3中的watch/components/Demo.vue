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
import {ref,reactive,watch} from 'vue'
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
        //情况1  监视ref所定义的一个响应式数据
        // watch(sum,(newValue,oldValue)=>{
        //     console.log('sum的值变化了',newValue,oldValue)
        // },{immediate:true})

        //情况2  监视ref所定义的多个响应式数据
        // watch(sum,(newValue,oldValue)=>{
        //     console.log('sum的值变化了',newValue,oldValue)
        // })
        // watch(msg,(newValue,oldValue)=>{
        //     console.log('msg的值变化了',newValue,oldValue)
        // })

        // watch([sum,msg],(newValue,oldValue)=>{
        //     console.log('msg或sum的值变化了',newValue,oldValue)
        // })

        //情况三 监视reactive所定义的一个响应式数据 
        //      注意 此处无法正确获得oldValue
        //      注意：强制开启了深度监视（deep配置无效）

        // watch(person,(newValue,oldValue)=>{
        //     console.log('person changed',newValue,oldValue)
        // })

        //情况四 监视reactive所定义的一个响应式数据的某个属性
        // watch(()=>person.name,(newValue,oldValue)=>{
        //     console.log('person changed',newValue,oldValue)
        // })

        //情况五 监视reactive所定义的一个响应式数据的某些属性
        watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
            console.log('person changed',newValue,oldValue)
        })

        //特殊情况
        watch(()=>person.job,(newValue,oldValue)=>{
            console.log('person changed',newValue,oldValue)
        },{deep:true})//此处由于监视的是reactive所定义的对象的某个属性，所以配置有效

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