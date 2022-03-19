import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//引入路由器
import router from './router'

//引入store
// import store from './store/index'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  //也可以不要mount 用这种写法
  el:"#app",
  //将APP组件放入容器中
  render: h => h(App),
  // store,
  // beforeCreate() {
  //   Vue.prototype.$bus = this
  // },

  router:router
})
