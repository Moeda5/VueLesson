<template>
    <div class="school">
        <h2>学校名:{{ name }}</h2>
        <h2>学校地址:{{ address }}</h2>
    </div>
</template>

<script>
    export default {
        name:'School',
        props:['getSchoolName'],
        data() {
            return {
                name:"软饭大学",
                address:"东京"    
            }
        },
        mounted(){
            this.$bus.$on('hello',(data)=>{
                console.log('我是School组件，收到了数据',data)
            })
        }
    }
</script>

<style scoped>
    .school{
        background-color: rgb(3, 176, 199);
        padding: 5px;
    }
</style>