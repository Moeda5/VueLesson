//该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用
Vue.use(Vuex)

//准备actions————用于响应组件中的动作 context相当于一个ministore 上下文
//dispatch跟actions对话
const actions = {
    // jia(context,value){
    //     console.log("jiajiajia")
    //     context.commit("JIA",value)
    // },
    // jian(context,value){
    //     console.log("jianjianjia")
    //     context.commit("JIAN",value)
    // },
    jiaOdd(context,value){
        console.log("jiaOdd")
        if(context.state.sum % 2){
            context.commit("JIA",value)
        }
    },
    jiaWait(context,value){
        console.log("wait")
        setTimeout(()=>{
            context.commit("JIA",value)
        },500)
    },
}
//准备mutations————用于操作数据（state）
//commit跟mutations对话
const mutations = {
    JIA(satte,value){
        console.log("JIAJIAJIA")
        state.sum += value
    },
    JIAN(satte,value){
        console.log("JIANJIANJIAN")
        state.sum -= value
    },
}
//准备state————用于存储数据  他相当于组件里的data
const state = {
    sum:0,//当前的和
    school:'尚硅谷',
    subject:'前端'
}
//准备getters——用于将state中的数据进行加工  他相当于组件里的computed
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

//创建store 暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})