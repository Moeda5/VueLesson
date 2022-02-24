<template>
    <div class="container">
        <search/>
        <list/>
    </div>
</template>

<script>
    import List from './components/List.vue'
    import Search from './components/Search.vue'
    export default {
    components: { Search, List },
        name:'App',
       
    }
</script>

<style>


</style>