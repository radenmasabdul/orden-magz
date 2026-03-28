import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import UnderMaintenance from '../components/global/UnderMaintenance.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { title: 'Home - The Orden Magz' }
    },
    {
      path: '/teknologi',
      name: 'teknologi',
      component: UnderMaintenance,
      meta: { title: 'Teknologi - The Orden Magz' }
    },
    {
      path: '/bisnis',
      name: 'bisnis',
      component: UnderMaintenance,
      meta: { title: 'Bisnis - The Orden Magz' }
    },
    {
      path: '/gaya-hidup',
      name: 'gayaHidup',
      component: UnderMaintenance,
      meta: { title: 'Gaya Hidup - The Orden Magz' }
    },
    {
      path: '/opini',
      name: 'opini',
      component: UnderMaintenance,
      meta: { title: 'Opini - The Orden Magz' }
    },
  ],
})

router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'The Orden Magz'
})

export default router