// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import AOS from 'aos';
import HomePage from '../components/HomePage.vue'
import AboutPage from '../components/AboutPage.vue'
import SkillsPage from '../components/SkillsPage.vue'
import ProjectsPage from '../components/ProjectsPage.vue'
import ContactPage from '../components/ContactPage.vue'
import NotFound from '../components/NotFound.vue';

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
  },
  {
    path: '/:pathMatch(.*)*',
    name: '/notfound',
    component: NotFound,
    meta: {
      hideFooter: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      return { top: 0 };
    }
  },
});
router.afterEach(() => {
  AOS.refresh();
});

export default router