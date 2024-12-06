import { createWebHistory, createRouter } from 'vue-router'

import OrderPage from '@/views/OrderPage.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/order', component: OrderPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
