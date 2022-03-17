<template>
    <div>
        <h2>Home组件内容</h2>
            <div>
            <ul class="nav nav-tabs">
                <li>
                <router-link  class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                <router-link  class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <!-- 这里这个名字是组件名 就是export default 里面那个name -->
            <keep-alive include="News">
                <router-view></router-view>
            </keep-alive>
            <!-- 
                如果缓存多个，但又不全部缓存可以写成数组
                <keep-alive :include="['News','Message']">
                    <router-view></router-view>
                </keep-alive>
             -->
            </div>
        </div>
</template>

<script>
    export default {
        name:"Home"
    }
</script>