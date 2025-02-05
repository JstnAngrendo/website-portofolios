<template>
  <!-- <section class="content-3" id="project">
    <div class="pTitle">
      <h1>PROJECTS</h1>
    </div>
    <div class="project-row">
      <div
        class="project-card"
        v-for="(project, index) in projects"
        :key="index"
      >
        <h1>{{ project.title }}</h1>
        <h2>{{ project.description }}</h2>
        <div class="lang1">
          <h3 v-for="(lang, i) in project.languages" :key="i">{{ lang }}</h3>
        </div>
        <a class="git" :href="project.link" target="_blank">
          <i class="fa-brands fa-github"></i> github
        </a>
      </div>
    </div>
  </section> -->
  <section class="project">
    <div class="project-title">
      <h1>PROJECTS</h1>
    </div>
    <div class="portfolio-container">
      <div class="project-card" 
        v-for="project in projectList" 
        :key="project.id"
        @click="goToProjectDetail(project.id)"
      >
        <div
          class="card-image"
          :style="{ backgroundImage: `url(${project.logo})` }"
        ></div>
        <div class="card-content">
          <h2 class="card-title">{{ project.title }}</h2>
          <p class="card-description">{{ project.description }}</p>
          <div class="card-technologies">
            <span
              class="tech-badge"
              v-for="tech in project.technologies"
              :key="tech"
              :class="tech.toLowerCase()"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./js/projects-component.js"></script>

<style scoped>
    .project {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    .project-title {
      display: flex;
      justify-content: center;
      position: relative;
      margin-bottom: 32px;
    }

    .project-title h1 {
      text-align: center;
      font-size: 3rem;
      color: var(--primarycolor);
      position: relative;
      z-index: 1;
      display: inline-block;
    }

    .project-title h1::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 78vw;
      height: 2px;
      background-color: var(--primarycolor);
    }

    .portfolio-container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 0 1rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    /* Card Styles */
    .project-card {
      background-color: #fff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s, box-shadow 0.3s;
      display: flex;
      flex-direction: column;
    }

    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .card-image {
      height: 180px;
      background-size: cover;
      background-position: center;
    }

    .card-content {
      padding: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .card-description {
      font-size: 0.9rem;
      margin-bottom: 1rem;
      color: #555;
    }

    /* Technology Badges */
    .card-technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tech-badge {
      background-color: #eef2f6;
      color: #2c3e50;
      font-size: 12px;
      font-weight: bold;
      padding: 6px 12px;
      border-radius: 20px;
      white-space: nowrap;
    }

    .tech-badge {
      background-color: #306998;
      color: #fff;
    }

    @media (max-width: 675px) {
      .portfolio-container {
        grid-template-columns: 1fr;
      }
    }
</style>
