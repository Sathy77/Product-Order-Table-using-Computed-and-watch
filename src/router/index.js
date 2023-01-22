import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VTableTest from '../views/VTableTest.vue'
import WatchView from '../views/WatchView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vabletest',
    name: 'vabletest',
    component: VTableTest
  },
  {
    path: '/watchview',
    name: 'watchview',
    component: WatchView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
