<template>
  <div class="container" id="home">
    <div class="content">
      <h2>Hello there,</h2>
      <h1>I am <span class="title"></span></h1>
      <p>
        l am a final year Undergraduate Computer Science student at Bina Nusantara University, currently pursuing my degree. With a strong passion for technology and a dedication to honing my skills, I am eager to share with you my journey, experiences, and projects that have shaped my educational and professional path.
      </p>
      <div class="social">
        <a href="https://www.instagram.com/justin_luv17/" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
        <a href="https://www.linkedin.com/in/justin-angrendo" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
        <a href="https://github.com/JstnAngrendo" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
        <a href="mailto:jluvian25@gmail.com" target="_blank"><font-awesome-icon icon="fa-solid fa-envelope" /></a>
        <a href="https://facebook.com" target="_blank"><font-awesome-icon icon="fa-brands fa-facebook-square" /></a>
      </div>
    </div>
    <div class="img-container">
      <img class="profile" src="@/assets/img/Foto-Profile-Transparan.png" alt="">
    </div>
  </div>
</template>

<script src="./js/home-component.js"></script>

<style scoped>
  .container{
    display: flex;
    padding: 70px 150px;
    align-items: center;
    justify-content: space-between;
  }
  
  .content{
    display: flex;
    flex-direction: column;
    width: 50%;
  } 
  
  .title {
    color: var(--thirdcolor);
  }

  .img-container {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: rgba(62, 62, 62, 0.30);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .profile {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    transition: transform 0.5s ease-in-out;
  }

  .img-container:hover {
    transform: scale(1.1);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  }

  .profile:hover {
    transform: scale(1.05);
  }

  .content h2{
    color: var(--primarycolor);
    margin-bottom: 1px;
    font-size: 32px;
  }
  .content h1{
    color: var(--primarycolor);
    margin-bottom: 1px;
    font-size: 26px;
  }
  .content p{
    color: var(--primarycolor);
    font-weight: 200;
    text-align: justify;
    font-size: 20px;
  }
  .social a{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display:  inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: var(--primarycolor);
    cursor: pointer;
    margin-right: 20px;
    background-color: rgba(255,255,255,0.1);
    margin-top: 1px;
  }

  .social a:hover{
    transform: scale(1.1);
    background-color: var(--thirdcolor);
    transition: .4s;
  }
</style>