import Vue from 'vue'
import App from './App.vue'
//引入插件
import plugins from './plugins'
Vue.config.productionTip = false
//应用插件  这个123是为了证明使用插件的时候可以往插件穿参数
Vue.use(plugins,1,2,3)

new Vue({
  //也可以不要mount 用这种写法
  el:"#app",
  //将APP组件放入容器中
  render: h => h(App),
})
