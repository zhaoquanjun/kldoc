import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/vue',
    children: [
      {
        path: '/vue/context-menu',
        component: () => import('@/pages/contextMenu.vue')
      }
    ]
  },
  {
    path: '/markdown',
    component: () => import('@/pages/markdown.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router