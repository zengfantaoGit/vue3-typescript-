<template>
  <div class="person">
    <div>name: {{person.name}}</div>
    <div>age: {{person.age}}</div>
    <div>sex: {{person.sex}}</div>
    <ul>
      <li v-for="per in personList" :key="per.id">
        {{per.age}} -- {{per.name}}
      </li>
    </ul>
  </div>
</template>


<script lang="ts" setup name="Person">
  // 引入一种类型时必须在类型前面添加type关键字标识
  import {type Person, type PersonList} from '@/type'
  import {ref} from 'vue'

  const person: Person = {
    name: 'haru',
    age: 14,
    id: 1,
    sex: '男'
  }
  // 使用ref定义可响应数据时
  const personList = ref<PersonList>([
    {name: 'haru', age: 14, id: 1, sex: '男'},
    {name: 'mo', age: 24, id: 2, sex: '男'}
  ])
  console.log(person)
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