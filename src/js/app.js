import { ref } from 'vue'
import HeadSection from '../components/HeadSection.vue'
import FooterSection from '@/components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    HeadSection,
    FooterSection
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