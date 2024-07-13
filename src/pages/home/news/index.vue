<template>
  <ul>
    <li>title: {{query.title}}</li>
    <li>id: {{query.id}}</li>
    <li>content: {{query.content}}</li>
  </ul>
</template>

<script lang="ts" setup name="news">
  // 获取关于route的hook函数模块
 import {useRoute} from "vue-router";
 const {query} = useRoute()
  console.log('query',query)
</script>

<style scoped>

</style>