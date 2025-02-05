<template>
  <section class="experience" id="experience">
    <div class="eTitle">
      <h1>EXPERIENCES</h1>
    </div>
    <div class="timeline">
      <div class="line"></div>
      <div v-for="(exp, index) in experiences" :key="index" class="section">
        <div class="bead"></div>
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
  </section>
</template>

<script src="./js/experience-component.js"></script>

<style scoped>
.experience {
  width: 100%;
  margin-bottom: 10px;
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
  background-color: var(--primarycolor);
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
  z-index: 1;
  left: 50%;
  width: 2px;
  height: 100%;
  background-color: var(--primarycolor);
  transform: translateX(-50%);
}

.section {
  display: flex;
  position: relative;
  z-index: 2;
  align-items: center;
  margin-bottom: 16px;
  width: 60%;
}

.bead {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: var(--primarycolor);
  transform: translate(-50%, -50%);
}

.experience-item {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 16px 48px;
  border-radius: 10px;
  color: var(--primarycolor);
  text-align: justify;
}

.experience-item.left {
  transform: translateX(-25%); 
  margin-left: 32px;
}

.experience-item.right {
  transform: translateX(75%); 
}

.exp {
  flex-grow: 1;
  padding-left: 36px;
}

.exp h2 {
  margin-bottom: 8px;
}

.exp h3 {
  margin-bottom: 16px;
}

.exp p {
  font-size: 16px;
  font-weight: 300;
}

.section img {
  margin-top: 16px;
  width: 100%;
  max-width: 400px;
}
@media (max-width: 768px) {
  .line {
    display: none;
  }

  .bead {
    left: 0px;
  }

  .section {
    width: 90%; 
    flex-direction: column;
    align-items: flex-start; 
  }

  .experience-item {
    width: 80%;
    transform: none; 
    margin-left: 32px; 
    padding: 16px;
  }

  .experience-item.left,
  .experience-item.right {
    transform: none;
    margin-left: 32px;
  }

  .exp {
    padding-left: 0;
  }

  .section img {
    max-width: 100%;
  }
}
</style>