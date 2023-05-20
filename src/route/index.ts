import Home from '@/pages/Home.vue'
import Profile from '@/pages/Profile.vue'
import Works from '@/pages/Works.vue'
import Glamprint from '@/pages/works/_gp.vue'
import Myjinja from '@/pages/works/_myjinja.vue'
import Mykyujin from '@/pages/works/_mykyujin.vue'
import Daijin from '@/pages/works/_daijin.vue'
import Report from '@/pages/works/_report.vue'
import Portfolio from '@/pages/works/_portfolio.vue'
import Annulus from '@/pages/works/_annulus.vue'
import Flyer from '@/pages/works/_flyer.vue'
import Lowson from '@/pages/works/_lowson.vue'
import Tamago from '@/pages/works/_tamago.vue'
import Chukyo from '@/pages/works/_chukyo.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/works', component: Works,},
    { path: '/glamprint', component: Glamprint },
    { path: '/myjinja', component: Myjinja },
    { path: '/mykyujin', component: Mykyujin },
    { path: '/daijin', component: Daijin },
    { path: '/report', component: Report },
    { path: '/portfolio', component: Portfolio },
    { path: '/annulus', component: Annulus },
    { path: '/flyer', component: Flyer },
    { path: '/lowson', component: Lowson },
    { path: '/tamago', component: Tamago },
    { path: '/chukyo', component: Chukyo },
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