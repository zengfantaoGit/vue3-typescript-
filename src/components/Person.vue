<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <div>姓名: {{person.name}}</div>
    <div>年龄：{{person.age}}</div>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>


<script lang="ts" setup name="Person">
  // 引入watch监听函数
  import {watch,ref} from "vue";

  const person = ref({
    name: 'haru',
    age: 18
  })

  function changeName() {
    person.value.name += '='
  }
  function changeAge() {
    person.value.age += 1
  }

  function changePerson() {
    person.value = {name: 'mo',age: 26}
  }

  // 若不添加{deep: true} 开启深度监视，则只能检测value值的变化，而无法检测value内对象值的变化
  // watch(person, (newVal,oldVal) => {
  //   console.log('person',newVal,oldVal)
  // })
  // 配置后即使修改对象内部的数据也会触发watch回调.
  // 若添加immediate:true则会在初始化时调用一次watch回调
  const stopWatch = watch(person, (newVal,oldVal) => {
    // 如果只修改对象内的值，则newVal与oldVal的值相同.
    // 本质上是因为oldVal是直接拿取原先对象的引用而非深拷贝导致的
    console.log('person',newVal,oldVal)
  },{deep:true,immediate:true})
  /*
    监视，情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
    watch的第一个参数是：被监视的数据
    watch的第二个参数是：监视的回调
    watch的第三个参数是：配置对象（deep、immediate等等.....）
  */
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