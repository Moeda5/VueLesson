<template>
    <div class="container">
        <Category title="美食">
            <img src="./assets/ruanfan.jpeg" alt="">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(g,index) in games" :key="index">{{g}}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category.vue'
  
    export default {
        name:'App',
        components: { Category },
        data() {
            return {
                foods:['火锅','烧烤','小龙虾','牛排'],
                games:['红色警戒','穿越火线','原神','吃鸡'],
                films:['《教父》','《拆弹专家》','《鬼父》']
            }
        },
    }
</script>

<style>
    .container{
        /* flex 弹性布局 */
        display: flex;
        /* 主轴对齐方式 */
        justify-content: space-around;
    }

</style>