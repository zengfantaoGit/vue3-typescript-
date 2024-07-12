<template>
  <div class="app">
    <Person></Person>
  </div>
</template>

<script lang="ts" setup name="App">
  import Person from '@/components/Person.vue'
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