import Home from '@/pages/Home.vue'
import Profile from '@/pages/Profile.vue'
import Works from '@/pages/Works.vue'
import Skill from '@/pages/Skill.vue'
import Glamprint from '@/pages/works/_gp.vue'
import Myjinja from '@/pages/works/_myjinja.vue'
import Mykyujin from '@/pages/works/_mykyujin.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/works', component: Works,},
    { path: '/skill', component: Skill },
    { path: '/glamprint', component: Glamprint },
    { path: '/myjinja', component: Myjinja },
    { path: '/mykyujin', component: Mykyujin },
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  },
  history: createWebHistory(),
  routes
})

export default router;