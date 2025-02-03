import config from '@/config'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'ProjectDetail',
  setup () {
    const route = useRoute()
    const project = ref({})
    
    const projects = config.app.projects
    
    const images = import.meta.glob('@/assets/img/*', { eager: true })

    const projectImages = computed(() => {
      if (!project.value || !project.value.images) return []
    
      return project.value.images.map(image => images[`/src/assets/img/${image}`]?.default || '')
    })
    
    onMounted(() => {
      const projectId = parseInt(route.params.id)
      project.value = projects.find((p) => p.id === projectId)
    })

    return {
      projects,
      project,
      projectImages
    }
  }
}
