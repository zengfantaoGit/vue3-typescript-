<template>
  <div class="app">
    <div class="link">
<!--       router-link作为router的跳转链接，active-class是对应链接触发时的样式。to是触发链接后跳转的路径-->
      <router-link active-class="red" to="/person">person</router-link>
      <router-link active-class="red" to="/index">index</router-link>
      <router-link active-class="red" to="/home">home</router-link>
    </div>
    <div class="view">
<!--      对应的路由出口-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">

</script>

<style scoped lang="less">
  .red {
    background-color: red;
    color: black;
  }
  .app {
   font-size: 20px;
   font-family: "微软雅黑 Light";
   padding: 30px;
   box-shadow: 0 0 4px;
   border: 1px solid red;
   border-radius: 20px;

    .link {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .view {
      height: 500px;
      border: 1px solid black;
    }
 }
</style>