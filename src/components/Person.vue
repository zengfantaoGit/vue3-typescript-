<template>
  <div class="person">
    <h1>需求：水温达到50℃，或水位达到20cm，则联系服务器</h1>
    <h2 id="demo">水温：{{temp}}</h2>
    <h2>水位：{{height}}</h2>
    <button @click="changePrice">水温+10</button>
    <button @click="changeSum">水位+10</button>
    <button @click="num += 1;count+= 1">num ++ </button>
  </div>
</template>


<script lang="ts" setup name="Person">
  import {ref,watch,watchEffect} from "vue";
  let temp = ref(0)
  let height = ref(0)
  let num = ref(0)
  let count = 0

  function changePrice() {
    temp.value += 10
  }

  function changeSum() {
    height.value += 10
  }

  // 使用watch监视，则必须声明需要监视temp与height的ref对象
  watch([temp,height], (value) => {
    console.log('watch')
    // 此时val: [temp,height]
    let [newTemp, newHeight] = value
    if (newTemp >= 50 || newHeight >= 20) {
      console.log('发送服务器watch')
    }
  })

  // 而使用watchEffect则不需要指明需要监督的属性。
  // 且该watchEffect传入的函数会默认开始调用一次
  const stopWatch = watchEffect(() => {
    // count不是响应式数据，count的变化不会触发回调
    console.log('watchEffect',count)
    // 只有该回调函数用到的可响应式数据发生变化时才会重新触发回调
    if (temp.value >= 50 || height.value >= 20) {
      console.log('发送服务器watchEffect')
    }
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