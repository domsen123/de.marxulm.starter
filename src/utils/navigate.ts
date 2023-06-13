import type { Router } from 'vue-router'

export const navigate = async (router: Router, path: string) => {
  router.currentRoute.value.meta.isBack = false
  await router.push({
    path,
  })
}

export const navigateBack = async (router: Router) => {
  router.currentRoute.value.meta.isBack = true
  router.back()
}
