<!-- 
    协议名 主机名 端口号 必须一致 不然会发生跨域问题
    http  localhost 8080 如果从另外一台服务器拿数据这3个里面其中有东西会不一致
    解决方法
    1.cors 这个得后端人员在服务器写 但是一般不这么用 因为写了以后谁都能拿了
    2.jsonp 这个得前后端一起写 很麻烦 而且只能解决get 不能解决post
    3.代理 https://cli.vuejs.org/zh/config/#devserver-proxy
 -->
<template>
    <div>
        <button @click="getStudents">获取学生信息</button>
        <button @click="getCars">获取学生信息</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'App',
        methods:{
            getStudents(){
                //方法一不需要加前缀
                // axios.get('http://localhost:8080/students').then(
                axios.get('http://localhost:8080/ruanfan/students').then(
                    response => {
                        console.log('请求成功了',response.data)
                    },
                    error => {'请求失败了',error.message}
                )
            },
            getCars(){
                //方法一不需要加前缀
                // axios.get('http://localhost:8080/students').then(
                axios.get('http://localhost:8080/demo/cars').then(
                    response => {
                        console.log('请求成功了',response.data)
                    },
                    error => {'请求失败了',error.message}
                )
            }
        }
    }
</script>
