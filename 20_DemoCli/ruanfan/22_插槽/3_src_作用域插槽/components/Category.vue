<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot :youxis="games">我是默认内容</slot>
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
    data() {
        return {
            games:['红色警戒','穿越火线','原神','吃鸡'],
        }
    },
}
</script>

<style scoped>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3 {
        text-align: center;
        background-color: blueviolet;
    }
    img {
        width: 100%;
    }
    video {
        width: 100%;
    }
</style>