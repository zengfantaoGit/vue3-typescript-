<template>
  <div class="person">
    <div>
      人类
    </div>
    <div>name: {{name}}</div>
    <div>age: {{age}}</div>
    <button @click="setName">点击便名字</button>
  </div>
</template>

<!--<script lang="ts">-->
<!--export default {-->
<!--  name: "Person",-->
<!--}-->
<!--</script>-->

<!-- 在script中添加setup配置项，此时整个script标签包裹的就是setup函数内的函数体，且默认全部返回。但不能写入其他的配置项-->
<!-- 若想要在script标签直接配置name配置项，则需要安装vite-plugin-vue-setup-extend开发依赖-->
<script lang="ts" setup name="Person111">
console.log('setup')
// setup函数内部的数据优先级比data,methods高，会覆盖
let age = 18
let name = 'haru'
let sex: string = '奶啊你'

//暂时无法实现响应式数据
function setName() {
  name = '梨花'
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