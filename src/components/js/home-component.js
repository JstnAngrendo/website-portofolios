import { ref, onMounted } from "vue"
import Typed from "typed.js"
import lottie from 'lottie-web'
import animationData from '@/assets/video/profile.json'

export default {
  name: 'HomeComponent',
  setup() {
    const roles = ref([
      'Justin Luvian Angrendo',
      'Front-End Developer',
      'Back-End Developer',
      'Tech Enthusiast'
    ])


    onMounted(() => {
      new Typed('.title', {
        strings: roles.value,
        typeSpeed: 70,
        backSpeed: 60,
        loop: true,
        showCursor: true,
      })
      lottie.loadAnimation({
        container: document.getElementById('profile-video'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData
      })
    })

    return { 
      roles 
    }
  }
}
