<template>
    <div>
        <li>
            <label>
                <input type="checkbox" :checked='todoobj.done' @change="handleCheck(todoobj.id)" />
                <span v-show="!todoobj.isEdit">{{ todoobj.title }}</span>
                <!-- @blur为失去焦点事件 -->
                <input 
                    type="text"
                    v-show="todoobj.isEdit" 
                    :value="todoobj.title" 
                    @blur="handleBlur(todoobj,$event)"
                    ref="inputTitle"
                >
            </label>
            <!-- btn-danger就是红色危险样式 在APP中 -->
            <button class="btn btn-danger" @click="handleDelete(todoobj.id)">删除</button>
            <button v-show="!todoobj.isEdit" class="btn btn-edit" @click="handleEdit(todoobj)">编辑</button>
        </li>
    </div>
    
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'Item',
        props:['todoobj'],
        methods: {
            //勾选
            handleCheck(id){
                //通知App组件将对应的todo对象的done值取反
                // this.checkTodo(id)
                this.$bus.$emit('checkTodo',id)
            },
            //删除
            handleDelete(id){
                if(confirm('你确定删除么？')){
                   pubsub.publish('deleteTodo',id)
                }
            },
            //编辑
            handleEdit(todoobj){
                //todoobj.hasOwnProperty('isEdit')判断todoobj对象中有没有isEdit属性
                //如果todoobj.hasOwnProperty('isEdit') 写法报错就用下面这个
                if (Object.prototype.hasOwnProperty.call(todoobj,'isEdit')) {
                    todoobj.isEdit = true
                } else {
                    //这样往对象加的数据才有set和get
                    this.$set(todoobj,'isEdit',true)
                }
                //点完编辑后 输入框自动获取焦点
                //nextTick 会在下一次DOM更新之后再回调
                this.$nextTick(
                    ()=>this.$refs.inputTitle.focus()
                )
                
            },
            //失去焦点回调（真正执行修改逻辑）
            handleBlur(todoobj,event){
                todoobj.isEdit = false

                //更新之前判断一下客户写的东西是否合法
                if(!event.target.value.trim()){
                    return alert('输入不能为空')
                }
                this.$bus.$emit('updateTodo',todoobj.id,event.target.value)
            }
        }
    }
    
</script>

<style scoped>
    /*item*/
    li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    }

    li label {
    float: left;
    cursor: pointer;
    }

    li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
    }

    li button {
    float: right;
    display: none;
    margin-top: 3px;
    }

    li:before {
    content: initial;
    }

    li:last-child {
    border-bottom: none;
    }

    li:hover{
        background-color: #ddd;
    }

    li:hover button{
        display: block;
    }
</style>