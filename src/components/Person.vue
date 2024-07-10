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
    <button @click="setPerson">设置人</button>
    <hr>
    <div>obj.a.b.c.d: {{obj.a.b.c.d}}</div>
    <button @click="setObj">设置obj</button>
  </div>
</template>







<script lang="ts" setup name="Person">
    import {reactive,ref} from 'vue'
    // 若ref接收的是对象类型，内部其实也是调用了reactive函数。
    // reactive无法接收基本数据类型作为参数
    const person = reactive({
      name: 'haru',
      age: 18
    })
    let obj = ref({
      a:{
        b:{
          c:{
            d:666
          }
        }
      }
    })

    function setAge() {
      person.age += 1
    }
    function setName() {
      person.name = '梨花'
    }

    function setPerson() {
      // Cannot assign to 'person' because it is a constant.
      // person = reactive({name: 'mo', age: 26}) (无法直接赋值）
      Object.assign(person, {name: 'mo', age: 26}) // 只能通过Object.assign方法进行赋值才不会丢失响应式
    }

    function setObj() {
      obj.value.a.b.c.d = 999
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