<template>
  <section class="skills-section" id="skills">
    <h2 class="skill-title">SKILLS</h2>
    <hr class="underline" />
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
  color: #ffffff;
  text-align: center;
  position: relative;
}
.skills-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #1A2B31;
  opacity: 0.8;
  z-index: -1;
}

.skill-title {
  font-size: 40px;
  margin-bottom: 20px;
  position: relative;
}

.underline {
  max-width: 1250px;
  height: 3px;
  background-color: var(--thirdcolor);
  /* margin: 10px 0 20px 0; */
  border: none;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  /* justify-content: center; */
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
