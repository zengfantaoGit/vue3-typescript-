// createRouter能生成一个项目的路由器
// createWebHashHistory生成路由器的hash访问模式
import {createRouter,createWebHashHistory} from "vue-router";
import home from '@/components/home.vue'
import person from '@/components/Person.vue'
import index from '@/components/index.vue'

//暴露路由构建器
export default createRouter({
    // 设置路由模式
    history: createWebHashHistory(),
    routes: [
        {
            path: '/index',
            component: index
        },
        {
            path: '/person',
            component: person
        },
        {
            path: '/home',
            component: home
        }
    ]
})