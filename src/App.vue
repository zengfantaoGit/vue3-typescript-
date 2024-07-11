<template>
  <div class="app">
    <h1 ref="hello">你好呀</h1>
    <person ref="person"></person>
  </div>
</template>

<script lang="ts" setup name="App">
  import Person from "@/components/Person.vue";
  import {ref} from 'vue'
  // 不加数据则返回以该名所设置的ref数据
  // 在html标签添加则获取对应的dom元素
  let hello = ref()
  console.log('hello',hello)
  // 在组件标签添加则获取组件实例对象，且默认无法获取子组件数据
  let person = ref()
  console.log('person',person)
  let sum = ref()
</script>

<style scoped>
  h1 {
    margin: 10px;
  }
 .app {
   font-size: 20px;
   font-family: "微软雅黑 Light";
   padding: 30px;
   box-shadow: 0 0 4px;
   border: 1px solid red;
   border-radius: 20px;
 }
</style>