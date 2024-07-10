<template>
  <div class="person">
    <div>
      人类
    </div>
<!--    模板中不需要访问value属性-->
    <div>name: {{person.name}}</div>
    <div>age: {{person.age}}</div>
    <button @click="setName">点击便名字</button>
    <button @click="setAge">添加一岁</button>
    <hr>
    <div>obj.a.b.c.d: {{obj.a.b.c.d}}</div>
    <button @click="setObj">设置obj</button>
  </div>
</template>







<script lang="ts" setup name="Person">
    import {reactive,ref} from 'vue'
    // 若ref接收的是对象类型，内部其实也是调用了reactive函数。
    // reactive无法接收基本数据类型作为参数
    const person = ref({
      name: 'haru',
      age: 18
    })
    let obj = ref({
      a:{
        b:{
          c:{
            d:666
          }
        }
      }
    })

    // 此时使用ref包装对象的返回结果是一个RefImpl对象，但内部的value属性是由Proxyduix包裹
    console.log(person)

    function setAge() {
      // 此时先要访问RefImpl的value属性，再当作Proxy对象处理
      person.value.age += 1
    }
    function setName() {
      person.value.name = '梨花'
    }

    function setObj() {
      obj.value.a.b.c.d = 999
    }

</script>

<style scoped>
div {
  margin: 10px;
}

.person {
  font-size: 20px;
  background-color: skyblue;
  font-family: "微软雅黑 Light";
  padding: 20px;
  box-shadow: 0 0 4px;
  border: 1px solid red;
  border-radius: 20px;
}
</style>