<template>
  <section class="about-section" id="about">
    <h2 class="section-title">
      <font-awesome-icon icon="code-branch" class="icon-style" />  About Me
    </h2>
    <hr class="underline" />
    <div class="about-content">
      <div class="about-text">
        <p>
          Hello! I'm a passionate software engineer with hands-on experience in both front-end and back-end development. I enjoy building user-friendly interfaces and developing systems that are clean, efficient, and scalable.
        </p>
        <p>
          While I have a strong grasp of both client-side and server-side technologies, I'm especially enjoying diving deeper into backend engineering. I'm currently focused on sharpening my backend skills through hands-on projects, learning best practices, and aligning my work with real-world industry standards. With the goal of growing into a versatile full-stack developer and confidently transitioning into backend-focused roles
        </p>
        <p>
          Outside of coding, I'm always eager to explore new tools and deepen my understanding of software development. I'm driven by curiosity and a genuine passion to grow both independently and through collaboration with others in the tech community.
        </p>
        <a 
          href="https://drive.google.com/file/d/1CNQSpp1DzdZT5kGXoRRAiRFL-dS3svyl/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          class="download-cv-btn" 
        >
          Download CV
        </a>
      </div>
      
      <div class="about-image-wrapper">
        <!-- Blob SVG as background -->
        <div class="blob-container">
          <!-- <svg class="blob-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#00C2FF" d="M35.2,-40.5C50.4,-29.2,70.8,-22.7,76.4,-10.6C82,1.5,72.8,19.1,59.9,28.3C47.1,37.5,30.7,38.3,15.5,44.7C0.4,51.1,-13.5,63.1,-27.3,63.2C-41.1,63.3,-54.8,51.4,-62.6,36.7C-70.4,22,-72.3,4.5,-70.6,-13.7C-68.9,-31.9,-63.7,-50.8,-51.3,-62.6C-39,-74.4,-19.5,-79.2,-4.7,-73.5C10,-67.9,20,-51.9,35.2,-40.5Z" transform="translate(100 100)" />
          </svg> -->
          <img class="blob-svg" src="@/assets/icon/blob-1.gif" alt="Blob background" />
        </div>
        <!-- Profile image on top -->
        <!-- <img class="profile-image" src="@/assets/img/Foto Profile.png" alt="My photo" /> -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 60px 150px;
  color: #fff;
  text-align: left;
  position: relative; 
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #1A2B31;
  opacity: 0.6;
  z-index: -1;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.underline {
  width: 105px;
  height: 3px;
  background-color: var(--thirdcolor);
  margin: 10px 0 20px 0;
  border: none;
}

.about-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

.about-text {
  flex: 1;
  min-width: 280px;
  font-size: 1rem;
  line-height: 1.8;
  text-align: justify;
}

.download-cv-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border: 2px solid #00e3cc;
  background-color: transparent;
  color: #00e3cc;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  cursor: pointer;
}

.download-cv-btn:hover {
  background-color: #00e3cc;
  color: #1A2B31;
}


.about-image-wrapper {
  flex: 1;
  min-width: 260px;
  position: relative;
  width: 400px;
  height: 600px;
  margin: auto;
}

.blob-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: visible;
}

.blob-svg {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
  filter: drop-shadow(0 0 10px rgba(0, 194, 255, 0.3));
}


.profile-image {
  position: relative;
  width: 30%;
  height: auto;
  z-index: 2;
  object-fit: cover;
  margin: 10% auto;
  display: block;
  border: 4px solid white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

@media (max-width: 895px) {
  .about-section {
    padding: 20vw 8vw;
  }
  .about-image-wrapper {
    display: none;
  }
}

</style>