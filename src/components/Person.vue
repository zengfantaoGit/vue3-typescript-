<template>
  <div class="person">
    <div>
      人类
    </div>
<!--    模板中不需要访问value属性-->
    <div>name: {{person.name}}</div>
    <div>age: {{person.age}}</div>
    <button @click="setName">点击便名字</button>
    <button @click="setAge">添加一岁</button>
    <hr>
    <div>person.obj.a: {{person.obj.a}}</div>
  </div>
</template>







<script lang="ts" setup name="Person">
    // 作用：将一个响应式对象中的每一个属性，转换为ref对象。且对象中的value与原响应式对象的相同属性引用相同
    import {reactive,ref,toRefs} from 'vue'

    const person = reactive({
      name: 'haru',
      age: 18,
      obj: {
        a: 2
      }
    })

    // let {name, age, obj} = person
    // // haru 18 (直接使用解构赋值可以拿到响应式对象的值。
    // console.log(name,age,obj)
    //
    // function setAge() {
    //   age += 1
    //   obj.a += 2
    //   // 但这里的age只是拿到了person.age的值，无法一同修改
    //   console.log(age,person.age)
    //   // 解构赋值只是做到了浅拷贝。只拷贝了引用的值，所以对于对象obj内部的a值能做到一并修改
    //   console.log(obj.a,person.obj.a)
    // }

    // toRefs会将一个响应式对象内部的所有键值对都会变成一对refImpl，且对应引用的地址相同
    let {name,age,obj} = toRefs(person)
    // ObjectRefImpl对象
    console.log(name,age,obj)
    function setName() {
      name.value = '梨花'
    }

    function setAge() {
      age.value += 1
      obj.value.a += 2
      // 此时age.value的值能与person.age的值做到同步
      console.log(age.value,person.age)
      console.log(obj.value.a,person.obj.a)
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