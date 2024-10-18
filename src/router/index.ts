import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AboutUs from '../components/AboutUs.vue'
import ALevel from '../components/ALevel.vue'
import Background from '../components/Background.vue'
import IELTS from '../components/IELTS.vue'
import Application from '../components/Application.vue'
import Resources from '../components/Resources.vue'
import FullTime from '../components/FullTime.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutUs },
  { path: '/a-level', component: ALevel },
  { path: '/background', component: Background },
  { path: '/ielts', component: IELTS },
  { path: '/application', component: Application },
  { path: '/resources', component: Resources },
  { path: '/full-time', component: FullTime },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router