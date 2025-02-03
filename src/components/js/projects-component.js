import config from "@/config";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";


export default {
  name: 'ProjectsComponent',
  setup () {
    const router = useRouter()
    const images = import.meta.glob('@/assets/img/*', { eager: true });
    // const projects = ref([
    //   {
    //     id: 1,
    //     title: "E-Commerce Website",
    //     description: "A modern e-commerce platform with payment integration.",
    //     image: images['/src/assets/img/aktivis.jpg'].default,
    //     technologies: ["Vue", "JavaScript", "CSS"],
    //   },
    //   {
    //     id: 2,
    //     title: "Portfolio Website",
    //     description: "My personal portfolio to showcase projects.",
    //     image: images['/src/assets/img/aktivis.jpg'].default,
    //     technologies: ["React", "TailwindCSS"],
    //   },
    //   {
    //     id: 3,
    //     title: "Data Analysis Tool",
    //     description: "A Python-based tool for data analysis.",
    //     image: images['/src/assets/img/aktivis.jpg'].default,
    //     technologies: ["Python", "Pandas", "Matplotlib"],
    //   },
    //   {
    //     id: 4,
    //     title: "Data Analysis Tool",
    //     description: "A Python-based tool for data analysis.",
    //     image: images['/src/assets/img/aktivis.jpg'].default,
    //     technologies: ["Python", "Pandas", "Matplotlib"],
    //   },
    // ])

    const projects = ref(config.app.projects)

    const projectList = computed(() => {
      return projects.value.map(project => ({
        ...project,
        logo: images[`/src/assets/img/${project.logo}`]?.default || ''
      }))
    })

    const goToProjectDetail = (projectId) => {
      router.push({ name: 'ProjectDetail', params: { id: projectId } });
    }

    return {
      projects,
      projectList,
      goToProjectDetail
    }
  }
}