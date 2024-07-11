<template>
  <div class="person">
    <h1>北京</h1>
    <h2 ref="hello">天安门</h2>
    <h3>天津</h3>
  </div>
</template>


<script lang="ts" setup name="Person">
  import {ref,defineExpose} from 'vue'
  let a = ref(0)
  let b = ref(1)
  let c = ref(2)

  // defineExpose可以向引用它的父级暴露出自己所持有的数据
  defineExpose({a,b,c})
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