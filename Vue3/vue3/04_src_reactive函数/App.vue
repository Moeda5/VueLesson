<template>
    <h1>xinxi</h1>
    <h3>姓名：{{ person.name }}</h3>
    <h3>年龄：{{ person.age }}</h3>
    <h4>工作种类：{{person.job.type}}</h4>
    <h4>工作薪水：{{person.job.salary}}</h4>
    <h4>爱好：{{person.hobby}}</h4>
    <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { reactive } from "vue";

export default {
    name: "App",
    setup() {
        //数据
        /* let name = ref("张三");
        let age = ref(18);
        let job = reactive({
          type:'前端工程师',
          salary:'30K'
        });
        let hobby = reactive(['抽烟','喝酒','烫头'])
        */
        
        
        let person = reactive({
          name:'张三',
          age:18,
          job:{
            type:'前端工程师',
            salary:'30K'
          },
          hobby:['抽烟','喝酒','烫头']
        })
        //方法
        function changeInfo() {
            person.name = "李四";
            person.age = 20;
            person.job.type = "软饭工程师"
            person.job.salary = '30W'
            person.hobby[0] = '学习' 
        }

        //返回一个对象（常用）
        return {
            // name,
            // age,
            // job,
            // hobby,
            person,
            changeInfo,
        };
    },
};
</script>

