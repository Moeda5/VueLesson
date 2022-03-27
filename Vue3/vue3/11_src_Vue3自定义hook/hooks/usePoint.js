import {reactive,onMounted,onBeforeUnmount} from 'vue'
export default function (){
    //实现鼠标“打点”相关的数据
    let point = reactive({
        x:0,
        y:0
    })
    //实现属性“打点”相关的方法
    function savePoint(event){
        point.x = event.pageX
        point.y = event.pageY
    }
    //实现鼠标“打点”相关的生命周期钩子
    onMounted(() => {
        window.addEventListener('click',savePoint)
    })
    //组件注销时 需要取消这个监听
    onBeforeUnmount(() => {
        window.removeEventListener('click',savePoint)
    })

    return point
}
