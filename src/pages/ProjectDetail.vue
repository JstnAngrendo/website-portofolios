<template>
  <section class="project-detail">
    <div class="project-detail-container">
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
        <i class="fa-brands fa-github"></i> View on GitHub
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
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-detail-container {
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-title {
  font-size: 2rem;
  margin-bottom: 1rem;
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
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1rem;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--fifthcolor);
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 16px;
}

.project-link:hover {
  text-decoration: underline;
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