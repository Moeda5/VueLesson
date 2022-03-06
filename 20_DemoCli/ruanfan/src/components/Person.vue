<template>
    <div>
        <h1>人员列表 </h1>
        <h3 style="color:red">Count组件求和为： {{ sum }}</h3>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="add">添加</button>
        
        <button @click="addPersonServer">添加一个人，名字随机</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    import {mapState,mapActions} from 'vuex'
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        computed:{
            ...mapState('countOptions',['sum','school','subject']),
            ...mapState('personOptions',['personList']),
        },
        methods:{
            add(){
                const personObj = {id:nanoid(),name:this.name}
                //注意这里是不用map映射写法
                this.$store.commit('personOptions/ADD_PERSON',personObj)
            },
            //调用personOptions里的addPersonServer
            ...mapActions('personOptions',{addPersonServer:'addPersonServer'})
        }
    }
    //注意注意注意 非map 的getters actions 我就不写了 在尚硅谷116集第8分钟开始
</script>

<style>

</style>