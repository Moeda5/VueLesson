<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>学生名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <!-- 直接用 -->
        <h2>学生年龄：{{ age+1 }}</h2>

        <!-- 这种方法是对数据进行修改 -->
        <h2>学生年龄：{{ myAge }}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                msg:"软饭大学校长兼董事会执行主席兼办公室主任兼教学部主任兼班主任兼后勤主任兼保安兼保洁",
                // name:"某个追寻财富自由的有志青年",
                // sex:"男",
                // age:18


                //注意 注意 注意
                //传进来的数据最好别直接改，可以用下面的方法修改
                myAge:this.age,
            }
        },
        methods: {
            updateAge(){
                this.myAge++
            }
        },
        // props:['name','sex','age'] //简单接收方式

        //限制类型方式 虽然能接受 但是会在控制台给报错警告
        // props:{
        //     name:String,
        //     age:Number,
        //     sex:String
        // }

        props:{
            name:{
                type:String,//name的类型是字符串
                required:true//name是必要的
            },
            age:{
                type:Number,//name的类型是字符串
                default:99//可传可不传 不传就用默认的
            },
            sex:{
                type:String,//name的类型是字符串
                required:true//name是必要的
            },
        }
    }
</script>