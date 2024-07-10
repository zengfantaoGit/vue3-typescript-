<template>
  <div class="person">
    <label for="first">首：</label>
    <input type="text" v-model="firstName" id="fo=first"><br>
    <label for="first">尾：</label>
    <input type="text" v-model="LastName" id="fo=first"><br>
    全名：{{fullName}}<br>
    全名：{{fullName}}<br>
    全名：{{fullName}}<br>
    <hr>
    <button @click="setNum">num</button>
  </div>
</template>


<script lang="ts" setup name="Person">
  // 引入computed计算属性函数
  import {ref, computed} from "vue";
  let firstName = ref('zhan')
  let LastName = ref('san')
  let num = 1

  //修改了num但计算属性无变化.不会触发computed计算属性判断
  function setNum() {
    num += 1
    console.log(num)
  }

  // 若计算属性只携带一个函数，则该函数作为计算属性的getter，且fullName为只读属性
  // 且计算属性具有缓存机制，在多次调用计算属性时会判断当前引用的（响应式数据）是否发生变化,若没有则会返回原先的缓存值，减少调用次数
  // let fullName = computed(() => {
  //   return firstName.value + '-' + LastName.value + num
  // })

  // 此时的fullName计算属性即可读取，也可以写入
  let fullName = computed({
    set(val) {
      console.log(val)
    },
    get() {
      return firstName.value + '-' + LastName.value + num
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