import type { RouteRecordRaw } from 'vue-router';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    meta: {
      isKeepAlive: true,
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          isKeepAlive: true,
          icon: 'iconfont icon-shouye'
        }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue'),
        meta: {
          isKeepAlive: true,
          icon: 'iconfont icon-shouye'
        }
      }
    ]
  },
  // vue3微应用的路由匹配
  {
    path: '/vue3-app/:pathMatch(.*)*',
    name: 'vue3-app',
    component: () => import('@/layout/index.vue')
  },
  // vue2的路由匹配
  {
    path: '/vue2-app/:pathMatch(.*)*',
    name: 'vue2-app',
    component: () => import('@/layout/index.vue')
  },
  // react的路由匹配
  {
    path: '/react-app/:pathMatch(.*)*',
    name: 'react-app',
    component: () => import('@/layout/index.vue')
  }
]
