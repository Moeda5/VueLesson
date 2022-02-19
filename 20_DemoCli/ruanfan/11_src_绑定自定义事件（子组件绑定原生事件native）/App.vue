<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现 子给父传递数据 -->
        <school :getSchoolName="getSchoolName" @click.native="show"></school>
        <!-- 给 student vc上绑定一个自定义ruanfan事件实现 子给付传递数据 第一种方法使用v-on或@-->
        <student v-on:ruanfan="getStudentName" @demo="m1"></student>

        <!-- 给 student vc上绑定一个自定义ruanfan事件实现 子给付传递数据 第二种方法使用ref和mounted-->
        <!-- <student ref="student"/> -->
        <br>
    </div>
</template>

<script>
    import School from "./components/School"
    import Student from "./components/Student"

    export default {
        name:'App',
        components:{
            School,
            Student
        },
        data() {
            return {
                msg:"泥猴哇"
            }
        },
        methods: {
            getSchoolName(name){
                console.log("App收到了学校名："+name)
            },
            getStudentName(name,...params){
                console.log('App收到了学生名：',name,params)
            },
            m1(){
                console.log("demo被触发")
            },
            show(){
                alert("给子组件绑定原生事件")
            }
        },
        //如果用ref 可以用mounted 往组件绑定事件
        mounted(){
            //给student绑定一个ruanfan事件 事件调用 getStudentName调用
            // this.$refs.student.$on("ruanfan",this.getStudentName)

            //这种写法的好处是有灵活性 可以等一个事件完毕或者一个时间再绑定
            // setTimeout(()=>{
            //     this.$refs.student.$on("ruanfan",this.getStudentName)
            // },1000)

            //也可以让它只触发一次
            // this.$refs.student.$once("ruanfan",this.getStudentName)
        }
    }
</script>

<style>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>