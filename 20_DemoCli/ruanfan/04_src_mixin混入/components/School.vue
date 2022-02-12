<template>
    <div class="demo">
        <h2 @click="showName">学校名{{ name }}</h2>
        <h2>学校地址{{ address }}</h2>
    </div>
</template>

<script>
    import {
        weilefangzhiniyunsuoyiqilegezhegemingzi,
        weilefangzhiniyunsuoyiqilegezhegemingzi2
    } from '../mixin'
    export default {
        name:'School',
        data() {
            return {
                name:"软饭大学",
                address:"东京"    
            }
        },
        mixins:[
            weilefangzhiniyunsuoyiqilegezhegemingzi,
            weilefangzhiniyunsuoyiqilegezhegemingzi2
        ]
    }
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>