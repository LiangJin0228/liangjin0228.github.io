import { createRouter, createWebHashHistory } from 'vue-router/auto'

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: () => import('../layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../pages/home.vue')
      }
    ]
  },
  {
    path: '/Resume',
    component: () => import('../layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'Resume',
        component: () => import('../pages/resume.vue')
      }
    ]
  },
  {
    path: '/Contact',
    component: () => import('../layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'Contact',
        component: () => import('../pages/contact.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
