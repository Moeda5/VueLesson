//该文件用于创建Vuex中最为核心的store

import axios from 'axios'
import { nanoid } from 'nanoid'
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//使用
Vue.use(Vuex)

//求和功能相关的配置
const countOptions = {
    namespaced:true,
    actions:{
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
    },
    mutations:{
        JIA(state,value){
            console.log("JIAJIAJIA")
            state.sum += value
        },
        JIAN(state,value){
            console.log("JIANJIANJIAN")
            state.sum -= value
        },
    },
    state:{
        sum:0,//当前的和
        school:'尚硅谷',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    },
}

//人员管理功能相关的配置
const personOptions = {
    namespaced:true,
    actions:{
        //
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations:{
        ADD_PERSON(state,personObj){
            state.personList.unshift(personObj)
        }
    },
    state:{
        personList:[
            {id:'001',name:'张三'}
        ]
    },
    getters:{},
}


//创建store 暴露store
export default new Vuex.Store({
    modules:{
        countOptions,
        personOptions
    }
})