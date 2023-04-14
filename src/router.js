import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    meta: {
      pname: '可乐文档简介',
      icon: 'icon-shiyongwendang',
    },
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/vue',
    meta: {
      pname: 'VUE',
      icon: 'icon-vuejs',
    },
    children: [
      {
        path: '/vue/context-menu',
        meta: {
          pname: '右键菜单',
        },
        component: () => import('@/pages/contextMenu.vue'),
      },
    ],
  },
  {
    path: '/js',
    meta: {
      pname: 'JS',
    },
    children: [
      {
        path: '/js/vplus-transfer',
        meta: {
          pname: 'ele-plus transfer 二次封装',
        },
        component: () => import('@/pages/transfer.vue'),
      },
    ],
  },
  {
    path: '/css',
    meta: {
      pname: 'CSS',
      icon: 'icon-CSS1',
    },
    children: []
  },
  {
    path: '/markdown',
    meta: {
      pname: 'Markdown',
      icon: 'icon-vuejs',
    },
    component: () => import('@/pages/markdown.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { routes, router }
