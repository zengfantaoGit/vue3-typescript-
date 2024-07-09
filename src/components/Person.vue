<template>
  <div class="person">
    <div>
      人类
    </div>
    <div>name: {{name}}</div>
    <div>age: {{age}}</div>
    <button @click="setName">点击便名字</button>
    <div>pusha: {{pusha}}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person",
  data() {
    return {
      name: '顶针',
      age: 18,
      // data中是可以获取由setup产出的数据（未响应式）,但在ts代码层面会报错
      pusha: this.sex
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  // setup的执行顺序在所有生命周期钩子执行前
  setup() {
    console.log('setup')
    // setup函数内部的数据优先级比data,methods高，会覆盖
    let age = 18
    let name = 'haru'
    let sex: string = '奶啊你'

    //暂时无法实现响应式数据
    function setName() {
      name = '梨花'
    }

    return {
      age,
      name,
      sex,
      setName
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