<template>
    <h1>xinxi</h1>
    <h3>姓名：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <h4>工作种类：{{job.type}}</h4>
    <h4>工作薪水：{{job.salary}}</h4>
    <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from "vue";

export default {
    name: "App",
    setup() {
        //数据
        let name = ref("张三");
        let age = ref(18);
        let job = ref({
          type:'前端工程师',
          salary:'30K'
        });
        //方法
        function changeInfo() {
            name.value = "李四";
            age.value = 20;
            job.value.type = "软饭工程师"
            job.value.salary = '30W'
        }

        //返回一个对象（常用）
        return {
            name,
            age,
            job,
            changeInfo,
        };
    },
};
</script>

