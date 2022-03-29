<template>
    <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
    <demo v-if="isShowDemo"/>
    <hr>
</template>

<script>

import {ref} from 'vue'
import Demo from './components/Demo.vue';


export default {
    components: { Demo},
    name: "App",
    setup() {
        let isShowDemo = ref(true)
        return {isShowDemo}
    }
};
</script>

