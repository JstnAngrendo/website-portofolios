import { ref, onMounted } from "vue";
import Typed from "typed.js";

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
      });
    });

    return { 
      roles 
    }
  }
};
