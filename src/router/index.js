import { createRouter, createWebHistory } from 'vue-router'
import ContentSectionPage from '@/pages/ContentSectionPage.vue' 
import ProjectDetail from '@/pages/ProjectDetail.vue'

const routes = [
  // {
  //   path: '/',
  //   redirect: '/user-management'
  // },
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
  // {
  //   path: '/user-management',
  //   name: 'User Management',
  //   component: UserManagementPage
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router