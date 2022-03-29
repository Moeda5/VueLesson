<template>
    <div class="Child">
        <h3>我是Child组件（子）</h3>
        {{sum}}
    </div>
</template>

<script>
    import {ref} from 'vue'
    export default {
        name:'Child',
        setup(){
            let sum = ref(0)
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve({sum})
                },1000)
            })
        }
    }
</script>

<style>
    .Child {
        background-color: skyblue;
        padding:  10px;
    }
</style>