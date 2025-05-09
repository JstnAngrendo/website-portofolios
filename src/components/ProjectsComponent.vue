<template>
  <section class="project" id="project">
    <h1 class="project-title">PROJECTS</h1>
    <hr class="underline" />
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
          <div class="card-header">
            <h2 class="card-title">{{ project.title }}</h2>
            <span class="card-year">{{ project.year }}</span>
          </div>

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
      padding: 5vw 8vw;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .project-title {
      font-size: 40px;
      margin-bottom: 20px;
      position: relative;
      color: var(--primarycolor);
    }

    .underline {
      width: 100%;
      max-width: 1250px;
      height: 3px;
      background-color: var(--thirdcolor);
      border: none;
      margin-bottom: 2rem;
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
      background: #233C43;
      border: 1px solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      /* opacity: 0;
      transform: translateY(20px);
      animation: fadeUp 0.8s ease forwards;
      animation-delay: calc(0.1s * var(--index)); */
    }

    @keyframes fadeUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .project-card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 12px 24px rgba(0, 255, 255, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.4);
    }


    .card-image {
      height: 180px;
      background-size: cover;
      background-position: center;
      position: relative;
      border-bottom: 5px solid #9e7f59;
    }

    .card-image::after {
      content: "";
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      /* background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent); */
    }

    .card-content {
      padding: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .card-year {
      font-weight: 700;
      color: #f4d4ab;
      font-size: 0.95rem;
      border: 2px solid #f4d4ab;
      padding: 4px 10px;
      border-radius: 8px;
      background-color: transparent;
      font-family: 'Poppins', sans-serif;
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: bold;
      /* margin-bottom: 0.5rem; */
      color: #fff;
    }

    .card-description {
      font-size: 0.9rem;
      margin-bottom: 1rem;
      color: #fff;
    }

    /* Technology Badges */
    .card-technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tech-badge {
      background: rgba(0, 128, 255, 0.1);
      color: #00cfff;
      border: 1px solid #00cfff;
      font-size: 12px;
      font-weight: 600;
      padding: 5px 10px;
      border-radius: 20px;
      /* transition: background 0.3s ease; */
    }

    .tech-badge:hover {
      background: #00cfff;
      color: #000;
    }

    @media (max-width: 1024px) {
    .portfolio-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 675px) {
      .project {
        padding: 15vw 8vw;
      }
      .portfolio-container {
        grid-template-columns: 1fr;
      }
    }
</style>
