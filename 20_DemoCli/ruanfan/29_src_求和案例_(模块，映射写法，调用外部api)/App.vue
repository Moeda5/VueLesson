<template>
    <div>
       <count></count>
       <hr>
       <person></person>
    </div>
</template>

<script>
    import Count from './components/Count.vue'
    import Person from './components/Person.vue'
    export default {
        name:'App',
        components: { Count,Person},
        mounted() {
            //console.log('App',this)
        }
        
    }
</script>
