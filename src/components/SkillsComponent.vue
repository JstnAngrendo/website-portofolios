<template>
  <section class="skills-section" id="skills">
    <h2 class="skill-title">SKILLS</h2>
    <div class="skills-grid">
      <div
        class="skill-card"
        v-for="(skill, index) in visibleSkills"
        :key="index"
      >
        <div class="icon">{{ skill.icon }}</div>
        <h3>{{ skill.title }}</h3>
        <p>{{ skill.description }}</p>
      </div>
    </div>
    <button class="toggle-btn" @click="showMore = !showMore">
      {{ showMore ? "Show Less" : "Show More" }}
    </button>
  </section>
</template>

<script src="./js/skills-component.js"></script>

<style scoped>
.skills-section {
  padding: 5vw 8vw;
  background: 	#1A2B31;
  color: #ffffff;
  text-align: center;
}

.skill-title {
  font-size: 40px;
  margin-bottom: 60px;
  position: relative;
}

.skill-title::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%; 
    transform: translateX(-50%);
    width: 78vw; 
    height: 2px;
    background-color: var(--primarycolor);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-card {
  background-color: #233C43;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.05);
  transition: transform 0.2s ease;
}

.skill-card:hover {
  transform: translateY(-5px);
}

.skill-card .icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.skill-card h3 {
  font-size: 1.25rem;
  color: var(--primarycolor, #00bfff);
  margin-bottom: 0.5rem;
}

.skill-card p {
  color: #ccc;
  font-size: 1rem;
}

.toggle-btn {
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 999px;
  background-color: #233C43;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle-btn:hover {
  background-color: var(--hovercolor);
}
</style>
