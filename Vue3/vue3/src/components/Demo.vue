<template>
    <h1>信息</h1>
    姓：<input type="text" v-model="person.firstName">
    <br>
    名：<input type="text" v-model="person.LastName">
    <br>
    <span>全名：{{person.fullName}}</span>
    <br>
    全名：<input type="text" v-model="person.fullName">
</template>

<script>
import {reactive,computed} from 'vue'
export default {
    name: 'Demo',
    setup(){
        //数据
        let person = reactive({
          firstName:'张',
          LastName:'三'
        })
        //计算属性__简写（没有考虑计算属性被修改的情况）
        // person.fullName = computed(()=>{
        //     return person.firstName + '-' + person.LastName
        // })

        //计算属性__完整写法（考虑读和写）
        person.fullName = computed({
            get(){
                return person.firstName + '-' + person.LastName
            },
            set(value){
                const nameArr = value.split('-')
                person.firstName = nameArr[0]
                person.LastName = nameArr[1]

            }
        })
        
        return {
            person,
        }
    }  
}
</script>

<style>

</style>