<template>
  <FinisherBackground />
  <div class="main-app"> 
    <HeadSection :activeSidebarTitle="activeMenu" />
    <main class="main-container">
      <router-view />
    </main>
    <FooterSection />
  </div>
</template>

<script src="./js/app.js"></script>

<style scoped>
  .main-app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* background-color: #1F2A30; */
  }
  /* .content{
    display: flex;
    width: 100%;
    flex-direction: column;
  } */

  /* .main-container {
    flex-grow: 1;
    background-color: #1F2A30;
    background-size: cover;
    /* background: linear-gradient(90deg, #0E222A 0%, #333333 100%);  
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 92px;
  } */
  .main-container {
    flex-grow: 1;
    padding-top: 40px;
  }
</style>
