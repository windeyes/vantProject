import Vue from 'vue'
import VueRouter from 'vue-router'
import { index, login, showIcon } from '@/views'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/showIcon',
    name: 'showIcon',
    component: showIcon
  }
]

const router = new VueRouter({
  routes
})

export default router
