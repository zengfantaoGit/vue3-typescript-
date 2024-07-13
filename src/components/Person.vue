<template>
  <h1>这是person组件</h1>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>
    <hr>
    <button @click="getDog">点击获取狗图</button>
    <div>
      <img :src="dog" v-for="(dog,index) in dogImgs" :key="index" alt="">
    </div>
  </div>
</template>


<script lang="ts" setup name="Person">
import useDog from "@/hooks/useDog";
import useSum from "@/hooks/useSum";

// 解构赋值获取对应方法
let {dogImgs,getDog} = useDog()
let {sum, changeSum} = useSum()

let a = 1
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

img {
  height: 100px;
  margin-right: 10px;
}
</style>