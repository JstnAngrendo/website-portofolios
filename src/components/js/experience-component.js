import { ref } from 'vue'

import staffLntImg from '@/assets/img/staff-lnt.png'
import aktivisImg from '@/assets/img/aktivis.png'
import uncoverYourSkillImg from '@/assets/img/uncover-your-skill.png'
import BNCCUncoverYourSkillImg from '@/assets/img/bncc-uncover-your-skill.png'
import certiciateMentorshipImg from '@/assets/img/certificate-scholarship-mentor.png'
import blibliIntern1 from '@/assets/img/blibli-intern-1.jpg'
import blibliIntern2 from '@/assets/img/blibli-intern-2.jpg'

export default {
  name: 'ExperienceComponent',
  setup () {
    const experiences = ref([
      {
        title: 'BNCC Activist',
        date: 'Oct 2021 - Sep 2022',
        description: `Serving as a member of the Learning and Training Division (LnT) while enhancing and cultivating an organizational mindset. Engage in the Leadership Development Program to further develop both soft and technical skills in the context of BNCC's organizational environment.`,
        images: [aktivisImg]
      },
      {
        title: 'BNCC LnT Staff',
        date: 'Oct 2022 - Sep 2023',
        description: `Responsible for managing BNCC Learning and Training Course.PIC of LnT C Programming Course. Train and Mentor BNCC LnT Activist. <br> Mentoring BNCC Activist in Leadership Development Program.`,
        images: [staffLntImg]
      },
      {
        title: 'PIC Mentor & Operator BNCC Uncover Your Skill',
        date: 'April 2023 - May 2023',
        description: `Creating Learning Modules of Data Science. Supporting participants throughout the workshop in using tools specific to the workshop's content.
        <br>Assisting speakers in operating screens or handling technical aspects in the classroom.
        <br>Setting up the workshop room.`,
        images: [BNCCUncoverYourSkillImg, uncoverYourSkillImg]
      },
      {
        title: 'Scholarship Mentor Bina Nusantara University',
        date: 'September 2023 - Jan 2024',
        description: `Mentored 3 Computer Science students in subjects like Compilation Techniques, Operating Systems, Algorithms and Programming, and Object-Oriented Programming, helping them improve their academic performance and build both technical skills and confidence.`,
        images: [certiciateMentorshipImg]
      },
      {
        title: 'Frontend Developer Intern at Blibli.com',
        date: 'Feb 2024 - Feb 2025',
        description: `<ul>
        <li>Worked with the Payment Team to enhance transaction processing UI and optimize payment flows.</li>
        <li>Developed user interfaces (UI) using Vue.js, focusing on HTML structure, CSS styling, and JavaScript functionality.</li>
        <li>Identified and resolved bugs and errors during development, ensuring seamless application performance.</li>
        <li>Conducted unit testing to guarantee code quality and optimal functionality.</li>
        <li>Led the migration of applications from Vue 2 to Vue 3, ensuring compatibility with the latest technologies.</li>
        <li>Collaborated closely with the Quality Assurance (QA) team to test and validate applications prior to deployment.</li>
        <li>Worked with the Back-End team to integrate APIs and ensure seamless data flow between front-end and back-end systems.</li>
        <li>Documented development processes, including code changes, test cases, and implemented solutions.</li></ul>`,
        images: [blibliIntern1, blibliIntern2]
      }
    ])

    return {
      experiences
    }
  }
}