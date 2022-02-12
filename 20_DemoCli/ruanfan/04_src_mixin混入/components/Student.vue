<template>
    <div>
        <h2 @click="showName">学生名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
    </div>
</template>

<script>
    import {
        weilefangzhiniyunsuoyiqilegezhegemingzi,
        weilefangzhiniyunsuoyiqilegezhegemingzi2
    } from '../mixin'
    export default {
        name:'Student',
        data() {
            return {
                name:"某个追寻财富自由的有志青年",
                sex:"男",
            }
        },
        mixins:[
            weilefangzhiniyunsuoyiqilegezhegemingzi,
            weilefangzhiniyunsuoyiqilegezhegemingzi2
        ]
    }
</script>