import Home from '@/pages/Home.vue'
import Profile from '@/pages/Profile.vue'
import Works from '@/pages/Works.vue'
import Skill from '@/pages/Skill.vue'
import Glamprint from '@/pages/works/_gp.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/works', component: Works,},
    { path: '/skill', component: Skill },
    { path: '/glamprint', component: Glamprint },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;