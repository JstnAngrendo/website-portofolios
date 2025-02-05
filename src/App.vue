<template>
  <div class="main-app">
      <div class="content">
        <div class="header-container">
          <HeadSection :activeSidebarTitle="activeMenu" />
        </div>
        <div class="main-container">
          <router-view/>
        </div>
        <FooterSection />
      </div>
  </div>
</template>

<script src="./js/app.js"></script>

<style scoped>
  .main-app {
    height: 100%;
    width: 100%;
  }
  .content{
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }

  .main-container {
    flex-grow: 1;
    background-color: #F4F7FB;
    background-size: cover;
    background: linear-gradient(90deg, #0E222A 0%, #333333 100%); 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 92px;
  }
</style>
