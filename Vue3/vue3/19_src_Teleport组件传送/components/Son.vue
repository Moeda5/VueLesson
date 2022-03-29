<template>
    <div class="Son">
        <h3>我是Son组件（孙）</h3>
        <Dialog/>
    </div>
</template>

<script>
    import Dialog from './Dialog.vue'
    export default {
        name:'Son',
        components:{Dialog}
    }
</script>

<style>
    .Son {
        background-color: orange;
        padding:  10px;
    }
</style>