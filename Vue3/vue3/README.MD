## 拉开序幕的setup
1.理解：Vue3.0中一个新的配置项，值为一个函数
2.setup是所有Composition API（组合API）“表演的舞台”
3.组件中所用到的：数据 方法等等  均要配置在setup中
4.setup函数的两种返回值：
    1.若返回一个对象，则对象中的属性 方法 在模板中均可以直接使用（重点）
    2.若返回一个渲染函数 则可以自定义渲染内容（了解）
5.注意点：
    1.尽量不要与Vue2.x配置混用
        ·Vue2.x配置（data methos computed）中可以访问到setup中的属性方法
        ·但在setup中不能访问到Vue2.x配置（data methos computed）
        ·如果有重命名 setup优先
    2.setup不能是一个async函数 因为返回值不再是return的对象，而是promise 模板看不到的return对象中的属性

## ref函数
1.作用 定义一个响应式的数据
2.语法 constant xxx = ref(initValue)
    创建一个包含响应式数据的引用对象（reference对象，简称ref对象）
    JS中操作数据：xxx.value
    模板中读取数据：不需要.value,直接 <div>{{xxx}}</div>
备注
    接受的数据可以是 基本类型 也可以是对象类型
    基本类型的数据 响应式依然是考Object。defineProperty（）的get与set完成的
    对象类型的数据 内部“求助”了Vue3.0重点一个新函数————reactive函数。

## reactive函数
    ·作用 定义一个对象类型的响应式数据，（基本类型不要用它，要用ref函数）
    ·语法：const 代理对象 = reactive（源对象）接收一个对象（或数组），返回一个代理对象（proxy对象）
    ·reactive定义的响应式数据是 深层次的
    ·内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据进行操作

## reactive对比ref
    从定义角度来对比
        ·ref用来定义 基本类型数据
        reactive用来定义 对象（或数组）类型数据
        备注 ref也可以用来定义对象（或数组）类型数据，他内部会自动通过reactive转为代理对象

    ·从原理角度对比
        ref通过Object.defineProperty()的get与set来实现响应式（数据劫持）
        reactive通过使用Proxy来实现响应式（数据劫持），并通过Reflect操作源对象内部的数据

    从使用角度对比
        ref定义的数据 操作数据需要.value 读取数据时模板中直接读取不需要.value
        reactive定义的数据 操作数据与读取数据 均不要.value

## setup 的两个注意点
    setup执行的时机
        在beforeCreate之前执行一次  this是undefined
    
    setup的参数
        props 值为对象 包含 组件外部传递过来，且组件内部生命接收了的属性
        context 上下文对象
            attrs 值为对象 包含 组件外部传递过来 但没有在props配置中声明的属性，相当于this.$attrs
            slots 收到的插槽内容相当于 this.$slots
            emit 分发自定义事件的函数 相当于 this.$emit
            