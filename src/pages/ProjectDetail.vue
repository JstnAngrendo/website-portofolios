<template>
  <section class="project-detail">
    <div class="project-detail-container">
      <router-link to="/" class="back-home">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
        Back to Home
      </router-link>
      <h1 class="project-title">{{ project.title }}</h1>
      <div class="project-description" v-html="project.longDescription"></div>
      <div class="project-technologies">
        <span
          class="tech-badge"
          v-for="tech in project.technologies"
          :key="tech"
          :class="tech.toLowerCase()"
        >
          {{ tech }}
        </span>
      </div>
      <a :href="project.link" target="_blank" class="project-link">
        <font-awesome-icon icon="fa-brands fa-github" />
        View on GitHub
      </a>
      <div class="project-images">
        <img
          v-for="(image, index) in projectImages"
          :key="index"
          :src="image"
          :alt="`Project Screenshot ${index + 1}`"
          class="project-image"
        />
      </div>
    </div>
  </section>
</template>

<script src="./js/project-detail.js"></script>

<style scoped>
.project-detail {
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.project-detail-container {
  background-color: #fff;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.back-home {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  text-decoration: none;
  margin-bottom: 16px;
  transition: color 0.3s ease, transform 0.2s ease;
}

.back-home:hover {
  color: var(--thirdcolor);
  transform: translateX(-3px);
}

.back-home svg {
  font-size: 18px;
}

.project-title {
  font-size: 32px;
  margin-bottom: 16px;
}

.project-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  justify-content: center;
  margin-bottom: 16px;
}

.project-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.project-description {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 16px;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.tech-badge {
  background-color: var(--thirdcolor);
  color: var(--primarycolor);
  padding: 8px 12px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  margin-bottom: 10px;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--fifthcolor);
  color: var(--primarycolor);
  text-decoration: none;
  font-weight: bold;
  padding: 10px 16px;
  border-radius: 20px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-bottom: 16px;
}

.project-link i {
  font-size: 20px;
}

.project-link:hover {
  background-color: var(--thirdcolor);
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .project-images {
    grid-template-columns: 1fr;
  }

  .project-image {
    max-width: 100%;
  }
}
</style>