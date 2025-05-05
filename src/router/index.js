import { createRouter, createWebHistory } from 'vue-router'
import ContentSectionPage from '@/pages/ContentSectionPage.vue' 
import ProjectDetail from '@/pages/ProjectDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Content',
    component: ContentSectionPage
  },
  {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: ProjectDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (to.path !== from.path) {
      return { top: 0 }
    }
  }
})

export default router