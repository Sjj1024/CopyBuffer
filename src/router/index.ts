import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    // ipad页面
    {
        path: '/',
        name: '',
        component: () => import('@/pages/home.vue'),
    },
    // server页面
    {
        path: '/open',
        name: 'open',
        // 异步加载，打包时代码分割，性能优化
        component: () => import('@/pages/open.vue'),
    },
    // 404页面
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('@/pages/404.vue'),
    },
]

// 全局路由
const router = createRouter({
    history: createWebHashHistory(), // 路由模式：history模式
    routes: routes,
})

export default router
