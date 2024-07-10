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
    <div>obj.a.b.c.d: {{obj.a.b.c.d}}</div>
    <button @click="setObj">设置obj</button>
  </div>
</template>







<script lang="ts" setup name="Person">
    import {reactive} from 'vue'
    console.log('setup')
    // return Proxy
    const person = reactive({
      name: 'haru',
      age: 18
    })
    // 注意点：reactive定义的响应式数据是“深层次”的。
    let obj = reactive({
      a:{
        b:{
          c:{
            d:666
          }
        }
      }
    })

    // 一个Proxy代理对象
    console.log(person)

    function setAge() {
      // 可以直接使用person.age访问数据
      person.age += 1
    }
    function setName() {
      person.name = '梨花'
    }

    function setObj() {
      obj.a.b.c.d = 999
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