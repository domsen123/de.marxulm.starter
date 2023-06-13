import { createRouter, createWebHistory } from 'vue-router'
import { AppRoutes } from '~/types/enums/route.enums'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: AppRoutes.HOME, component: () => import('~/views/index.vue') },
    { path: AppRoutes.SUB, component: () => import('~/views/sub/index.vue') },
  ],
})

router.beforeEach((to, from) => {
  to.meta.isBack = from.meta.isBack
})

export default router
