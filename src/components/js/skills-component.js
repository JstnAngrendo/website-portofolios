import { ref, computed } from "vue"

export default {
  name: 'SkillsComponent',
  setup () {
    const showMore = ref(false)
    const skills = ref([
      {
        icon: "💻",
        title: "Frontend Development",
        description: "Vue.js, React.js, JavaScript, HTML, CSS, responsive design",
      },
      {
        icon: "⚙️",
        title: "Backend Basics",
        description: "Node.js, Express, Laravel, Spring Boot, REST APIs",
      },
      {
        icon: "🗄️",
        title: "Database",
        description: "MySQL, PostgreSQL, MongoDB",
      },
      {
        icon: "🧪",
        title: "Testing",
        description: "Unit testing, QA2 testing, monitoring in production",
      },
      {
        icon: "🎨",
        title: "UI/UX",
        description: "Minimal design with consistent color schemes",
      },
      {
        icon: "🧠",
        title: "Problem Solving",
        description: "Logical thinking and debugging skills",
      },
      {
        icon: "💡",
        title: "Creative Thinking",
        description: "Innovative solutions, out-of-the-box approaches.",
      },
      {
        icon: "🤝",
        title: "Teamwork & Collaboration",
        description: "Contributing to team goals and supporting others.",
      },
      {
        icon: "🌱",
        title: "Adaptability",
        description: "Adjusting quickly to changing environments.",
      },
      {
        icon: "🗣️",
        title: "Communication",
        description: "Clear and effective communication with all team members",
      },
      {
        icon: "🚀",
        title: "Initiative",
        description: "Proactively identifying opportunities and taking action",
      },
      {
        icon: "⏱️",
        title: "Time Management",
        description: "Efficiently prioritizing and meeting deadlines",
      }
    ])

    const visibleSkills = computed(() => {
      return showMore.value ? skills.value : skills.value.slice(0, 8)
    })

    return {
      showMore,
      skills,
      visibleSkills
    }
  }
}