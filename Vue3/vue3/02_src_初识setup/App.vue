<template>
  <h1>xinxi</h1>
  <h3>姓名：{{name}}</h3>
  <h3>年龄：{{age}}</h3>
  <h3>性别：{{sex}}</h3>
  <button @click="sayHello">Vue3说话</button>
  <button @click="sayWelcome">Vue2欢迎</button>
</template>

<script>
// import {h} from 'vue'

//Vue2写法也行 可以混用
export default {
  name: 'App',
  data() {
    return {
      sex:'男'
    }
  },
  methods: {
    sayWelcome(){
      alert("欢迎")
    }
  },
  //此处只是测试一下setup，暂时不考虑响应式的问题
  setup(){
    //数据
    let name = '张三'
    let age = 18

    //方法
    function sayHello(){
      alert(`我叫${name}，我${age}岁了，你好哇！`)
    }

    //返回一个对象（常用）
    return {
      name,
      age,
      sayHello
    }


    //返回一个函数（渲染函数）
    return ()=>{ return h('h1','尚硅谷')}
  }
}
</script>

