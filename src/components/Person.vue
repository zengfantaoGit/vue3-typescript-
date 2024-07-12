<template>
  <div class="person">
    <ul>
<!--      不需要使用x.personList访问，直接访问即可-->
      <li v-for="per in personList" :key="per.id">
        {{per.age}} -- {{per.name}}
      </li>
    </ul>
  </div>
</template>


<script lang="ts" setup name="Person">
  // 引入一种类型时必须在类型前面添加type关键字标识
  import {type Person, type PersonList} from '@/type'
  // 引入defineProps来接收父组件传入的值
  import {ref,defineProps} from 'vue'

  // 第一种方式，只是接收数据
  // defineProps传入一个数组，一个需要接收父组件数据名的数组
  // 返回一个接收对象，内部包含结果
  // const x = defineProps(['personList'])
  // console.log(x.personList)

  // 第二种写法：接收+限制类型
  // defineProps<{personList:PersonList}>()

  // 第三种写法：接收+限制类型+指定默认值+限制必要性
  // 若父组件未传递personList,则会用默认值代替
  let props = withDefaults(defineProps<{personList:PersonList}>(),{
    personList:() => [{id: 5,name:'小猪佩奇',age:18,sex: '男'}]
  })
  console.log(props)
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