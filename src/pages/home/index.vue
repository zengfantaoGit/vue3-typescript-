<template>
  <h1>这是home组件</h1>
  <div class="main">
    <ul>
      <li v-for="news in newList">
<!--        <router-link to="/home/news">-->
<!--          {{news.title}}-->
<!--        </router-link>-->
        <router-link :to="{path: '/home/news',query: {...news}}">
          {{news.title}}
        </router-link>
      </li>
    </ul>
    <aside>
<!--      处理相同路径，query不同时，组件不刷新的问题。-->
      <router-view :key="route.fullPath"></router-view>
    </aside>
  </div>
</template>

<script lang="ts" setup name="home">
  import {reactive} from "vue";
  import {useRoute} from 'vue-router'
  import {type NewsList} from "@/type";

  const route = useRoute()

  const newList = reactive<NewsList>([
    {id:1,content:'哈哈哈哈',title:'希望1号'},
    {id:2,content:'流氓鳄',title:'希望2号'},
    {id:3,content:'在建设但是发射点',title:'希望3号'}
  ])
</script>

<style scoped lang="less">
ul {
  margin: 0 auto;
}
.main {
  display: flex;

  aside {
    border: 1px solid red;
    margin-left: 20px;
    flex: 1;
  }
}
</style>