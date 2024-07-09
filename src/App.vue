<template>
  <div class="app">
    <h1>
      你好呀
    </h1>
    <person></person>
  </div>
</template>

<script lang="ts">
import Person from "@/components/Person.vue";
export default {
  name: "App",
  components: {Person}
}
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