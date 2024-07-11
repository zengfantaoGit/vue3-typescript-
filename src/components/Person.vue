<template>
  <div class="person">
    <h1>情况二：监视【reactive】定义的【对象类型】数据</h1>
    <div>姓名: {{person.name}}</div>
    <div>年龄：{{person.age}}</div>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
    <hr>
    <div>obj.a.b.c: {{obj.a.b.c}}</div>
    <button @click="test">修改obj.a.b.c</button>
  </div>
</template>


<script lang="ts" setup name="Person">
  // 引入watch监听函数
  import {watch,reactive} from "vue";

  const person = reactive({
    name: 'haru',
    age: 18
  })

  const obj = reactive({
    a: {
      b: {
        c: 1
      }
    }
  })

  function changeName() {
    person.name += '='
  }
  function changeAge() {
    person.age += 1
  }

  function changePerson() {
    Object.assign(person,{name: 'mo',age: 26})
  }

  function test(){
    obj.a.b.c = 888
  }

  // 默认开启了深度监视，拿取对象（newVal === oldVal）
  const stopWatch = watch(person, (newVal,oldVal) => {
    console.log('person',newVal,oldVal)
  },)

  watch(obj,(newValue,oldValue)=>{
    console.log('Obj变化了',newValue,oldValue)
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