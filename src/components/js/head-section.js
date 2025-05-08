import { nextTick, ref, toRef, watch, onMounted, onUnmounted } from "vue"
import { useRoute, useRouter } from "vue-router"

export default {
  name: 'HeadSection',
  props: {
    activeSidebarTitle: {
      type: String,
      default: () => ''
    }
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()
    const activeSidebarTitle = toRef(props, 'activeSidebarTitle')
    const menuOpen = ref(false)
    const currentSection = ref('home')

    const scrollToSection = (id) => {
      currentSection.value = id
      if (router.currentRoute.value.path === '/') {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        router.push({ path: '/', hash: `#${id}` })
      }
    }

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }


    const handleScroll = () => {
      const sections = ['home', 'skills', 'about', 'project', 'experience']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          currentSection.value = section
          break
        }
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    watch(
      () => route.hash,
      (newHash) => {
        if (newHash) {
          nextTick(() => {
            const element = document.getElementById(newHash.replace('#', ''))
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          })
        }
      }
    )

    return {
      activeSidebarTitle,
      menuOpen,
      scrollToSection,
      toggleMenu,
      currentSection
    }
  }
}