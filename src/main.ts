import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import type { UserModule } from '~/types'

import '@unocss/reset/tailwind-compat.css'
import '~/assets/styles/app.css'
import 'uno.css'

const app = createApp(App)
app.use(router)

Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
  .forEach(i => i.install({ app, router }))

router.isReady().then(() => {
  app.mount('#app')
})
