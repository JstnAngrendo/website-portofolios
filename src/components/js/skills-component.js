import { onMounted, ref } from "vue"

export default {
  name: 'SkillsComponent',
  setup () {
    const skills = ref([
      { img: new URL('@/assets/img/problem-solving.png', import.meta.url).href, title: 'Problem Solving' },
      { img: new URL('@/assets/img/teamwork.png', import.meta.url).href, title: 'Teamwork' },
      { img: new URL('@/assets/img/leadership.png', import.meta.url).href, title: 'Leadership' },
      { img: new URL('@/assets/img/web-developer.png', import.meta.url).href, title: 'Web Developer' },
      { img: new URL('@/assets/img/project-management.png', import.meta.url).href, title: 'Project Management' }
    ])
    
    const displayedImage = ref(skills.value[0].img)
    const displayedTitle = ref(skills.value[0].title)
    const displayedText = ref(skills.value[0].details)

    const displayItem = (index) => {
      displayedImage.value = skills.value[index].img
      displayedTitle.value = skills.value[index].title
      displayedText.value = skills.value[index].details
    }

    const startAutoSwitch = () => {
      let currentIndex = 0
      let intervalId = setInterval(() => {
        displayItem(currentIndex)
        currentIndex = (currentIndex + 1) % skills.value.length
      }, 3000)
    }

    onMounted(() => {
      startAutoSwitch()
    })


    return {
      skills,
      displayItem,
      displayedImage,
      displayedText,
      displayedTitle
    }
  }
}