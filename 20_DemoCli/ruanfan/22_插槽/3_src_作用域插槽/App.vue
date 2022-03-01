<template>
    <div class="container">
        <Category title="游戏">
            <template scope="ruanfan">
                <ul>
                    <li v-for="(g,index) in ruanfan.youxis" :key="index">{{g}}</li>
                </ul>
            </template>
        </Category>

        <Category title="游戏">
            <template scope="ruanfan">
                <ol>
                    <li style="color:red" v-for="(g,index) in ruanfan.youxis" :key="index">{{g}}</li>
                </ol>
            </template>
        </Category>

        <Category title="游戏">
            <!-- 这是新写法 -->
            <template slot-scope="ruanfan">
                <h4 v-for="(g,index) in ruanfan.youxis" :key="index">{{g}}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category.vue'
  
    export default {
        name:'App',
        components: { Category },
        
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