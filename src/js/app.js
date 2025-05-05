import { ref } from 'vue'
import HeadSection from '../components/HeadSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import FinisherBackground from '@/components/FinisherBackground.vue'

export default {
  name: 'App',
  components: {
    HeadSection,
    FooterSection,
    FinisherBackground
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