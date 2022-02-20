<template>
    <div class="school">
        <h2>学校名:{{ name }}</h2>
        <h2>学校地址:{{ address }}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'School',
        props:['getSchoolName'],
        data() {
            return {
                name:"软饭大学",
                address:"东京"    
            }
        },
        mounted(){
            //订阅hello消息 如果有人发布了hello消息那么就会执行这个function
            //msgName为发布消息名  data为该消息携带的参数
            //每个订阅会自动生成一个ID 把他放到this身上去
            this.pubID = pubsub.subscribe('hello',(msgName,data)=>{
                //注意 这个方程式里如果写成function形式 this是undefined  箭头函数才是vc
                console.log("有人发布了hello消息，hello消息的回调执行了",msgName,data)
            })
        },
        //一般做法 在销毁这个组件的时候要销毁这个订阅  根据ID来取消订阅
        beforeDestroy(){
           pubsub.unsubscribe(this.pubID)
        }
    }
</script>

<style scoped>
    .school{
        background-color: rgb(3, 176, 199);
        padding: 5px;
    }
</style>