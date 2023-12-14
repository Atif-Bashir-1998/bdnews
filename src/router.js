import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/one',
    name: 'one',
    component: () => import('./views/OneView.vue')
  },
  {
    path: '/two',
    name: 'two',
    component: () => import('./views/TwoView.vue')
  },
  {
    path: '/three',
    name: 'three',
    component: () => import('./views/ThreeView.vue')
  },
  {
    path: '/four',
    name: 'four',
    component: () => import('./views/FourView.vue')
  },
  {
    path: '/five',
    name: 'five',
    component: () => import('./views/FiveView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router