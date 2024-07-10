<template>
  <div class="person">
    <div>
      人类
    </div>
<!--    模板中不需要访问value属性-->
    <div>name: {{Name}}</div>
    <div>age: {{age}}</div>
    <button @click="setName">点击便名字</button>
    <button @click="setAge">添加一岁</button>
  </div>
</template>







<script lang="ts" setup name="Person">
    import {ref} from 'vue'
    console.log('setup')
    // 一个RefImpl的实例对象，简称ref对象或ref，ref对象的value属性是响应式的。
    // 对于当前age对象而言，age不是响应式的，age.value是
    let age = ref(18)
    let Name = ref('haru')

    console.log(age,'age')  // RefImpl {value: age }
    function setAge() {
      // 若需要修改值，则需要访问该对象的value属性
      // JS中操作ref对象时候需要.value
      age.value += 1
    }
    function setName() {
      Name.value = '梨花'
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