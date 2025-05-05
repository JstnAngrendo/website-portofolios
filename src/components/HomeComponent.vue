<template>
  <div class="container" id="home">
    <div class="content">
      <h2>Hello there,</h2>
      <h1>I am <span class="title"></span></h1>
      <h3 class="subtitle">Driven to engineer better digital solutions</h3>
      
      <div class="button-group">
        <a href="mailto:your.email@example.com" class="techno-button">Contact Me</a>
        <a href="#about" class="techno-button secondary">Get to Know Me</a>
      </div>

      
      <div class="social">
        <a href="https://www.instagram.com/justinluvian_" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
        <a href="https://www.linkedin.com/in/justin-angrendo" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
        <a href="https://github.com/JstnAngrendo" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
        <a href="mailto:jluvian25@gmail.com" target="_blank"><font-awesome-icon icon="fa-solid fa-envelope" /></a>
        <a href="https://facebook.com" target="_blank"><font-awesome-icon icon="fa-brands fa-facebook-square" /></a>
      </div>
    </div>
    <div id="profile-video" class="profile-video"></div>
    <!-- <div class="img-container">
      <img class="profile" src="@/assets/img/Foto-Profile-Transparan.png" alt="">
      
    </div> -->
  </div>
</template>

<script src="./js/home-component.js"></script>

<style scoped>
  .container{
    display: flex;
    padding: 80px 150px 80px 150px;
    align-items: center;
    justify-content: space-between;
  }
  
  .content{
    display: flex;
    flex-direction: column;
    max-width: 600px;
    width: 50%;
  } 
  
  .title {
    color: var(--thirdcolor);
  }

  /* .img-container {
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: rgba(181, 165, 165, 0.3);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  } */

  /* .profile-video {
    width: 100%;
    height: 100%;
  } */

  .profile-video{
    width: 550px;
    margin-left: 3rem;
  }

  .profile {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    transition: transform 0.5s ease-in-out;
  }

  /* .img-container:hover {
    transform: scale(1.1);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  } */

  .profile:hover {
    transform: scale(1.05);
  }

  .content h2{
    color: var(--primarycolor);
    margin-bottom: 1px;
    font-size: 36px;
  }
  .content h1{
    color: var(--primarycolor);
    margin-bottom: 1px;
    font-size: 32px;
  }
  
  .subtitle {
    color: var(--thirdcolor);
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 600;
    letter-spacing: 1px;
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
    background: linear-gradient(145deg, #00e3cc, #2f8a8d);
    color: #121212;
    transition: .4s;
    box-shadow: 0 0 10px #00e3cc88;
  }

  .button-group {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .techno-button {
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    border: 2px solid #00e3cc;
    background-color: transparent;
    color: #00e3cc;
    border-radius: 8px;
    transition: all 0.3s ease;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 2rem;
  }

  .techno-button:hover {
    background-color: #00e3cc;
    color: #121212;
    box-shadow: 0 0 15px #00e3ccaa;
  }

  .techno-button.secondary {
    border-color: #ffffffaa;
    color: #ffffffcc;
  }

  .techno-button.secondary:hover {
    background-color: #ffffffcc;
    color: #121212;
    box-shadow: 0 0 15px #ffffff44;
  }


  @media (max-width: 895px) {
  .container {
    padding: 50px;
    flex-direction: column;
    text-align: center;
  }

  .content {
    width: 100%;
  }

  .content h2 {
    font-size: 28px;
  }

  .content h1 {
    font-size: 24px;
  }

  .social {
    margin-top: 20px;
  }

  .social a {
    width: 40px;
    height: 40px;
    font-size: 24px;
  }

  .img-container {
    width: 300px;
    height: 300px;
    margin-top: 20px;
  }

  .button-group {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .container {
    padding: 30px;
  }

  .content h2 {
    font-size: 24px;
  }

  .content h1 {
    font-size: 22px;
  }

  .social a {
    width: 35px;
    height: 35px;
    font-size: 20px;
    margin-right: 15px;
  }

  .img-container {
    display: none;
  }
}
</style>