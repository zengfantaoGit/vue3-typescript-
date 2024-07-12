<template>
  <div class="app">
<!--    v-show触发子的update钩子-->
<!--    v-if触发子的destroy钩子-->
    <Person v-if="isShow"></Person>
  </div>
</template>

<script lang="ts" setup name="App">
  import Person from '@/components/Person.vue'
  import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
  // 生命周期钩子
  let isShow =ref(true)
  onBeforeMount(()=>{
    console.log('父挂载之前')
  })
  onMounted(()=>{
    console.log('父挂载完毕')
  })
  onBeforeUpdate(()=>{
    console.log('父更新之前')
  })
  onUpdated(()=>{
    console.log('父更新完毕')
  })
  // onBeforeUnmount与onUnmounted分别代替了原先的destroy生命周期
  onBeforeUnmount(()=>{
    console.log('父卸载之前')
  })
  onUnmounted(()=>{
    console.log('父卸载完毕')
  })
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