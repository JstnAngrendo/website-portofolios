import { ref } from 'vue'
import HeadSection from '../components/HeadSection.vue'

export default {
  name: 'App',
  components: {
    HeadSection
  },
  setup() {
    const activeMenu = ref('Home')

    const setActiveMenu = (menu) => {
      activeMenu.value = menu
    }

    return {
      activeMenu,
      setActiveMenu
    }
  }
}