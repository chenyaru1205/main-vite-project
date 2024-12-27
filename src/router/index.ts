import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/router/route';
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

const base = import.meta.env.BASE_URL
console.log(routes, 'baseRoutes*********************')
const router = createRouter({
  history: createWebHistory(base), //createWebHashHistory() hash模式
  routes: routes
})

window.addEventListener('popstate', (event) => {
  // 这里进行逻辑处理
  // 可获取当前路由路径 event.state.current 上一个访问路径event.state.back
})

// 路由加载前
router.beforeEach(async (to, from, next) => {
  next()
});

// 路由加载后
router.afterEach(() => {
});

export default router
