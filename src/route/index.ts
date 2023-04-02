import Home from '../pages/Home.vue'
import Profile from '../pages/Profile.vue'
import Works from '../pages/Works.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/works', component: Works },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;