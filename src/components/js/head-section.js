import { nextTick, ref, toRef, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

export default {
  name: 'HeadSection',
  props: {
    activeSidebarTitle: {
      type: String,
      default: () => ''
    }
  },
  setup (props) {
    const router = useRouter()
    const route = useRoute()
    const activeSidebarTitle = toRef(props, 'activeSidebarTitle')
    const menuOpen = ref(false)

    const scrollToSection = (id) => {
      if (router.currentRoute.value.path === '/') {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push({ path: '/', hash: `#${id}` });
      }
    }

    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value
    }

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
      toggleMenu
    }
  }
}