<template>
  <div class="app">
<!--    向子组件传递personList的数据-->
    <Person :personList="personList"></Person>
  </div>
</template>

<script lang="ts" setup name="App">
  import Person from '@/components/Person.vue'
  import {ref} from 'vue'
  import {type PersonList} from "@/type";

  const personList = ref<PersonList>([
    {name: 'haru', age: 14, id: 1, sex: '男'},
    {name: 'mo', age: 24, id: 2, sex: '男'},
    {name: 'wei', age: 14, id: 3, sex: '男'}
  ])
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