<template>
  <div class="person">
    <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
    <div>sum: {{sum}}</div>
    <button @click="changeSum">点击sum++</button>
  </div>
</template>


<script lang="ts" setup name="Person">
  // 引入watch监听函数
  import {watch,ref} from "vue";
  let sum = ref(0)
  // 修改方法
  function changeSum() {
    sum.value += 1
  }

  // 若监听ref基本数据。则直接填入不需要.value（此时监听value值的改变）
  // 且watch函数会返回一个回调函数，调用后会结束此次监听任务
  let stopWatch = watch(sum, (value, oldValue) => {
    console.log(value,oldValue)
    if (value >= 10) {
      // 结束监听函数
      stopWatch()
    }
  })
  console.log(stopWatch)
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