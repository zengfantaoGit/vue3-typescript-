// 引入渲染组件的方法
import { createApp } from 'vue'
// 引入App根组件
import App from './App.vue'
import router from "@/router";
// 渲染App组件并且挂载到#app容器
const app = createApp(App)
// 添加router逻辑
app.use(router)

app.mount('#app')