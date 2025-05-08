<template>
  <section class="experience" id="experience">
    <div class="eTitle">
      <h1>EXPERIENCES</h1>
    </div>
    <div class="timeline">
      <div class="line"></div>

      <div v-for="(exp, index) in experiences" :key="index" class="section">
        <div class="bead"></div>
        <div class="exp-container">
          <div 
            class="experience-item"
            :class="{'left': index % 2 === 0, 'right': index % 2 !== 0}"
          >
            <div class="exp">
              <h2>{{ exp.title }}</h2>
              <h3>{{ exp.date }}</h3>
              <p v-html="exp.description"></p>
              <img v-for="(img, imgIndex) in exp.images" :key="imgIndex" :src="img" alt="Experience Image" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script src="./js/experience-component.js"></script>

<style scoped>
.experience {
  padding: 5vw 0;
  width: 100%;
  margin-top: 100px;
  background: transparent;
}

.eTitle {
  text-align: center;
  color: var(--primarycolor);
  font-size: 32px;
  position: relative;
}

.eTitle h1 {
  font-size: 48px;
}

.eTitle h1::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 78vw;
  height: 2px;
  background-color: var(--thirdcolor);
}

.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
}

.line {
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  background-color: var(--thirdcolor);
  transform: translateX(-50%);
  z-index: 1;
}

.section {
  position: relative;
  width: 100%;
  margin-bottom: 32px;
}

/* .exp-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 2;
}

.experience-item {
  width: 45%;
  padding: 16px 24px;
  background: rgba(26, 43, 49, 0.8);
  border-radius: 12px;
  color: var(--primarycolor);
  text-align: justify;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}

.experience-item.left {
  margin-right: auto;
}

.experience-item.right {
  margin-left: auto;
} */

.exp-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  max-width: calc(100% - 10rem);
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 2;
}

.experience-item {
  max-width: calc(50% - 2rem); 
  width: 100%;
  padding: 16px 24px;
  color: var(--primarycolor);
  text-align: justify;
  box-sizing: border-box;
  /* word-wrap: break-word; */
  /* overflow-wrap: break-word; */
  /* background: rgba(26, 43, 49, 0.8); */
  /* border-radius: 12px; */
  /* box-shadow: 0 4px 16px rgba(0,0,0,0.2); */
}

.experience-item.left {
  margin-right: auto;
}

.experience-item.right {
  margin-left: auto;
}

.bead {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: var(--thirdcolor);
  z-index: 3;
}

/* .exp h2 {
  margin-bottom: 8px;
}

.exp h3 {
  margin-bottom: 16px;
  font-weight: 400;
}

.exp p {
  font-size: 16px;
  font-weight: 300;
} */

.exp h2 {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
}

.exp h3 {
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  font-weight: 400
}

.exp p, .exp ul, .exp li {
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  font-weight: 300
}

.section img {
  margin-top: 16px;
  width: 100%;
  max-width: 400px;
}


@media (max-width: 768px) {
  .line {
    left: 20px;
  }

  .bead {
    left: 20px;
  }

  .exp-container {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 48px;
  }

  .experience-item {
    max-width: calc(100% - 2rem); 
    width: 100%;
    margin: 0 0 16px 0;
  }

  .experience-item.left,
  .experience-item.right {
    margin: 0;
  }

  .exp {
    padding: 0;
  }
}

</style>