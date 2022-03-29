<template>
    <div class="app">
        <h3>我是APP组件</h3>
    </div>
</template>

<script>
import { reactive,readonly,toRefs,isRef,isReadonly,isProxy,ref, isReactive } from 'vue'
    export default {
        name:'App',
        setup() {
            let car = reactive({
                name:'奔驰',
                price:'40W'
            })
            let sum = ref(0)
            let car2 = readonly(car)

            console.log(isRef(sum))
            console.log(isReactive(car))
            console.log(isReadonly(car2))
            console.log(isProxy(car))

            return {...toRefs(car)}
        }
    }
</script>

<style>
    .app {
        background-color: gray;
        padding:  10px;
    }
</style>