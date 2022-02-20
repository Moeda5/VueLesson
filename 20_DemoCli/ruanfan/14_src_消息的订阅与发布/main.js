import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// const Demo = Vue.extend({})
// const d = new Demo()

// Vue.prototype.x = d

new Vue({
  //也可以不要mount 用这种写法
  el:"#app",
  //将APP组件放入容器中
  render: h => h(App),
})
