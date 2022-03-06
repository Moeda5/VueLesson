<template>
    <div >
        <h1>当前求和为：{{ $store.state.sum }}</h1>
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
export default {
    name:'Count',
    data() {
        return {
            
            n:1//用户选择的数字
        }
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
        console.log('Count',this)
    }
}
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>