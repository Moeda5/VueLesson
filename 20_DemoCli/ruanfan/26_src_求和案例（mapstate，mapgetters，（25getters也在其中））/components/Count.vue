<template>
    <div >
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大10倍为：{{ bigSum }}</h3>
        <h3>我在{{ school }}，学习{{ subject }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加：</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    name:'Count',
    data() {
        return {
            
            n:1//用户选择的数字
        }
    },
    computed:{
        //靠程序员自己亲自去写计算属性
        // sum(){
        //     return this.$store.state.sum
        // },
        // subject(){
        //     return $store.state.subject
        // },
        // school(){
        //     return $store.state.school
        // },

        //借助mapState生成计算属性，从state中读取数据 （对象写法）
        // ...mapState({sum:'sum',school:'school',subject:'subject'}),
        
        //借助mapState生成计算属性，从state中读取数据 （数组写法）
        ...mapState(['sum','school','subject']),

        /*  ************************************    */ 
        // bigSum(){
        //     return this.$store.getters.bigSum
        // }
        
        //  借助mapGetters生成计算属性，从getters中读取数据 （对象写法）
        // ...mapGetters({bigSum:'bigSum'})

        // 借助mapGetters生成计算属性，从getters中读取数据 （数组写法）
        ...mapGetters(['bigSum'])
    },
    methods: {
        increment(){
            //如果直接调用了jia 那么可以不用dispatch 直接commit 
            // 另外index 里的actions就可以注掉了
            // this.$store.dispatch('jia',this.n)
            this.$store.commit('JIA',this.n)
        },
        decrement(){
            //与jia同理
            // this.$store.dispatch('jian',this.n)
            this.$store.commit('JIAN',this.n)
        },
        incrementOdd(){
               this.$store.dispatch('jiaOdd',this.n)
        },
        incrementWait(){
               this.$store.dispatch('jiaWait',this.n)
        },
    },
    mounted() {
        const x = mapState({sum:'sum',school:'school',subject:'subject'}) 
        console.log('Count',x)
    }
}
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>