<template>
    <div class="Child">
        <h3>我是Child组件（子）</h3>
        <Son/>
    </div>
</template>

<script>
    import Son from './Son'
    export default {
        name:'Child',
        components:{Son}
    }
</script>

<style>
    .Child {
        background-color: skyblue;
        padding:  10px;
    }
</style>