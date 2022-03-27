<template>
    <button @click="isShowDemo = !isShowDemo">切换隐藏/显示</button>
    <demo v-if="isShowDemo"/>
    <hr>
    <test/>
</template>

<script>

import {ref} from 'vue'
import Demo from './components/Demo.vue';
import Test from './components/Test.vue';

export default {
    components: { Demo, Test },
    name: "App",
    setup() {
        let isShowDemo = ref(true)

        return {isShowDemo}
    }
};
</script>

