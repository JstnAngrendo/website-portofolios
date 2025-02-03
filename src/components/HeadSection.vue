<template>
  <header>
    <div class="header-content">
      <div class="logo">
        <h1>Justin Portfolios</h1>
      </div>
      <nav>
        <div class="hamb" @click="toggleMenu">
          <span :class="{ active: menuOpen }"></span>
          <span :class="{ active: menuOpen }"></span>
          <span :class="{ active: menuOpen }"></span>
        </div>
        <ul class="nav-list" :class="{ open: menuOpen }">
          <li><a href="#home" class="scroll-link">Home</a></li>
          <li><a href="#skills" class="scroll-link">Skills</a></li>
          <li><a href="#project" class="scroll-link">Project</a></li>
          <li><a href="#experience" class="scroll-link">Experience</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    activeSidebarTitle: String,
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style>
  header {
    position: fixed;
    width: 100%;
    padding: 16px 0px;
    background-color: var(--fifthcolor);
  }

  .header-content {
    display: flex;
    padding: 0px 100px;
    justify-content: space-between;
    align-items: center;
  }

  .logo h1 {
    color: var(--primarycolor);
    font-size: 24px;
  }

  .nav-list {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding-right: 100px;
    margin: 0;
  }

  .nav-list li {
    padding: 8px 16px;
    text-decoration: none;
  }

  .nav-list li a {
    color: var(--primarycolor);
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .nav-list li a:hover {
    color: var(--thirdcolor);
  }

.hamb {
  display: none;
  width: 35px;
  height: 24px;
  position: relative;
  cursor: pointer;
}

.hamb span {
  display: block;
  background: var(--thirdcolor);
  width: 100%;
  height: 3px;
  margin: 5px 0;
  transition: 0.3s;
}

.hamb span:nth-child(2) {
  margin: 5px 0;
}

@media (max-width: 895px) {
  .header-content {
    padding: 0px 30px;
  }
  .nav-list {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding-right: 0px;
    margin: 0;
  }
}

@media (max-width: 600px) {
  .hamb {
    display: block;
  }

  .nav-list {
    display: none; 
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--fifthcolor);
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    padding: 16px;
  }

  .nav-list.open {
    display: flex;
  }

  .nav-list li {
    width: 100%;
    text-align: left;
  }
}

</style>