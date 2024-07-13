// createRouter能生成一个项目的路由器
// createWebHashHistory生成路由器的hash访问模式
import {createRouter,createWebHashHistory} from "vue-router";
import home from '@/pages/home/index.vue'
import news from '@/pages/home/news/index.vue'
import person from '@/pages/person/index.vue'
import index from '@/pages/index/index.vue'

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
            component: home,
            // 子路由开启配置children
            children: [
                {
                    // 这里不需要添加 /
                    path: 'news',
                    component: news,
                }
            ]
        }
    ]
})