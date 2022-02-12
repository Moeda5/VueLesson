import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //也可以不要mount 用这种写法
  el:"#app",
  //将APP组件放入容器中
  render: h => h(App),
})
