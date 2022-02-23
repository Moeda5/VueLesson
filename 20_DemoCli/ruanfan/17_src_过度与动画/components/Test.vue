<template>
  <div>
      <button @click="isShow = !isShow">点我</button>
      <!-- appear 一开始就播放动画 -->
      <transition name="hello" appear>
          <h1 v-show="isShow">你好啊！</h1>
      </transition>
  </div>
</template>

<script>
export default {
    name:'Test',
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
    }
    /* animation 是动画的意思  如果transition 不给name 那么hello 默认为v*/
    .hello-enter-active{
        animation: ruanfan 1s linear;
    }
    /* reverse 是反转的意思 */
    .hello-leave-active{
        animation: ruanfan 1s linear reverse;
    }

    @keyframes ruanfan {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translate(0%);
        }
    }
</style>