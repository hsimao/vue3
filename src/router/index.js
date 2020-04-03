import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home'),
  },
  {
    path: '/form',
    name: 'AppForm',
    component: () => import(/* webpackChunkName: "AppForm" */ '@/views/AppForm'),
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import(/* webpackChunkName: "Demo" */ '@/views/Demo'),
  },
  {
    path: '/reactive',
    name: 'Reactive',
    component: () => import(/* webpackChunkName: "Demo" */ '@/views/Reactive'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
