<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>


<script lang="ts" setup name="Person">
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
// 1. 在vue3中，setup函数代替了vue2原先的beforeCreate与created函数
console.log('创建')

// 数据
let sum = ref(0)
// 方法
function changeSum() {
  sum.value += 1
}
// 生命周期钩子
onBeforeMount(()=>{
  console.log('子挂载之前')
})
onMounted(()=>{
  console.log('子挂载完毕')
})
onBeforeUpdate(()=>{
  console.log('子更新之前')
})
onUpdated(()=>{
  console.log('子更新完毕')
})
// onBeforeUnmount与onUnmounted分别代替了原先的destroy生命周期
onBeforeUnmount(()=>{
  console.log('子卸载之前')
})
onUnmounted(()=>{
  console.log('子卸载完毕')
})
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