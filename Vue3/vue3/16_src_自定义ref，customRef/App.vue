<template>
    <input type="text" v-model="keyWord">
    <h3>{{keyWord}}</h3>
</template>

<script>
import {ref,customRef} from 'vue'
export default {
    name: "App",
    setup() {
        //自定义Ref————名为myRef value是初始值 newValue是改后的值
        function myRef(value){
            return customRef((track,trigger)=>{
                let timer
                return {
                    get(){
                        console.log(`有人从myRef这个容器中读取数据了，我吧${value}给他了`)
                        track()//追踪一下keyWord的改变（提前和get商量一下，让他认为这个Value是有用的）
                        return value
                    },
                    set(newValue){
                        console.log(`有人吧myRef这个容器中数据改为了：${newValue}`)
                        clearTimeout(timer)
                        timer = setTimeout(()=>{
                            value = newValue
                            trigger()//通知Vue去重新解析模板
                        },1000)
                    }
                }
            })
        }

        // let keyWord = ref('hello')//使用Vue提供的内置ref
        let keyWord = myRef('hello')//使用程序员自定义的ref
        return {keyWord}
    }
};
</script>

