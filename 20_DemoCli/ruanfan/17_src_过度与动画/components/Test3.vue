<!-- 
    使用之前 npm install animate.css
    官网 animate.style
 -->
<template>

  <div>
      <button @click="isShow = !isShow">点我</button>
      <!-- 要动画多个标签必须用group 并且每个标签必须有个不同key值 -->
        <transition-group 
            appear
            name="animate__animated animate__bounce" 
            enter-active-class="animate__tada"
            leave-active-class="animate__backOutUp"
        >
            <h1 v-show="isShow" key="1">欢迎来到</h1>
            <h1 v-show="isShow" key="2">软饭大学</h1>
      </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
    name:'Test2',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
    h1 {
        background-color: blueviolet;
        transition: 0.5s linear;
    }

</style>