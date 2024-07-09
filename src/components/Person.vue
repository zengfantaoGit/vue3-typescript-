<template>
  <div class="person">
    <div>
      人类
    </div>
    <div>name: {{name}}</div>
    <div>age: {{age}}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
  data() {
    return {
      name: '顶针',
      age: 18
    }
  }
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