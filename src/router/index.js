// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import SkillsPage from '../components/SkillsPage.vue'
import ProjectsPage from '../components/ProjectsPage.vue'
import ContactPage from '../components/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      hideFooter: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsPage
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsPage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router