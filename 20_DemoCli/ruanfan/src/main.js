import Vue from 'vue'
import App from './App.vue'
//引入全部ElementUI组件库 
// import ElementUI from 'element-ui';
//引入全部ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';


//按需引入
import { Button,Row,} from 'element-ui';


Vue.config.productionTip = false
//应用ElementUI 全引用

// Vue.use(ElementUI)
//按需注册
Vue.component(Button.name, Button);


new Vue({
  //也可以不要mount 用这种写法
  el:"#app",
  //将APP组件放入容器中
  render: h => h(App),
})
