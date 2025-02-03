<template>
  <section class="content-skill" id="skills">
    <div class="sTitle">
      <h1>SKILLS</h1>
    </div>
    <div class="skill-row">
      <div class="left">
        <img id="displayedImage" :src="displayedImage" alt="">
        <h1 id="displayedTitle">{{ displayedTitle }}</h1>
        <p id="displayedText">{{ displayedText }}</p>
      </div>
      <div class="right">
        <div
          class="skill-card-item"
          v-for="(skill, index) in skills"
          :key="index"
          @mouseover="displayItem(index)"
        >
          <img :src="skill.img" :alt="skill.title" />
          <h1>{{ skill.title }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./js/skills-component.js"></script>

<style scoped>
  .content-skill{
    padding: 5vw 8vw;
  }
  .sTitle{
      display: flex;
      justify-content: center;
      margin-bottom: 2vw;
  }
  .sTitle h1{
      text-align: center;
      position: relative; 
      z-index: 1; 
      display: inline-block;
      color: var(--primarycolor);
      font-size: 3rem;
  }
  .sTitle h1::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%; 
      transform: translateX(-50%);
      width: 78vw; 
      height: 2px;
      background-color: var(--primarycolor);
  }
  .skill-row{
      display: flex;
      margin-top: 3rem;
  }

  .left {
      flex: 1;
      background-color: var(--primarycolor);
      /* background: linear-gradient(140deg, var(--fifthcolor) -10%,var(--thirdcolor)); */
      margin-left: 2vw;
      text-align: center;
      border-radius: 20px;
      box-shadow: inset 0 0 50px var(--fifthcolor);
  }

  .left img{
      margin-top: 5rem;
      width: 20rem;
      height: 20rem;
  }
  .left h1,
  .left p{
      color: var(--fifthcolor);
  }
  .left h1{
      font-size: 2rem;
  }
  .left p{
      font-size: 1.5rem;
  }


  .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 0vw 2vw;
  }

  .skill-card-item {
      background-color: var(--fifthcolor);
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
      border-radius: 20px;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;
      display: flex;
      flex-direction: row;
      align-items: center; 
      padding: 10px;
      margin-bottom: 10px; 
      width: 100%; 
  }

  .skill-card-item:hover {
      transform: scale(1.05);
  }

  .skill-card-item img {
      width: 5rem;
      height: 5rem;
      border-radius: 5vw;
      object-fit: cover;
      background: var(--primarycolor);
  }

  .skill-card-item h1 {
      font-weight: 600;
      font-size: 1.5rem;
      margin-left: 1rem; 
      text-align: left; 
      flex: 1;
      color: var(--primarycolor);
  }
  .skill-card-item::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 5px; 
      background-color: var(--primarycolor);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
  }

  .skill-card-item:hover::before,
  .skill-card-item.active::before { 
      opacity: 1;
  }
</style>
