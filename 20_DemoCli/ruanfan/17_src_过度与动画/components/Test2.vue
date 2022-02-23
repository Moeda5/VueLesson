<template>
  <div>
      <button @click="isShow = !isShow">点我</button>
      <!-- 要动画多个标签必须用group 并且每个标签必须有个不同key值 -->
      <transition-group name="hello" appear>
            <h1 v-show="isShow" key="1">欢迎来到</h1>
            <h1 v-show="isShow" key="2">软饭大学</h1>
      </transition-group>
  </div>
</template>

<script>
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
    /* 进入的起点*/
    .hello-enter{
        transform: translateX(-100%);
    }
    /* 进入的终点 */
    .hello-enter-to{
        transform: translateX(0);
    }
    /* 离开的起点*/
    .hello-leave{
        transform: translateX(0);
    }
    /* 离开的终点 */
    .hello-leave-to{
        transform: translateX(-100%);
    }

</style>