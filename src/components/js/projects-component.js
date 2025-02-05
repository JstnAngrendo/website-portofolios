import config from "@/config"
import { computed, ref } from "vue"
import { useRouter } from "vue-router"


export default {
  name: 'ProjectsComponent',
  setup () {
    const router = useRouter()
    const images = import.meta.glob('@/assets/img/*', { eager: true })
    const projects = ref(config.app.projects)

    const projectList = computed(() => {
      return projects.value.map(project => ({
        ...project,
        logo: images[`/src/assets/img/${project.logo}`]?.default || ''
      }))
    })

    const goToProjectDetail = (projectId) => {
      router.push({ name: 'ProjectDetail', params: { id: projectId } })
    }

    return {
      projects,
      projectList,
      goToProjectDetail
    }
  }
}