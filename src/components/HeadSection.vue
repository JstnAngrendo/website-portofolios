<template>
  <header>
    <div class="header-content">
      <div class="logo">
        <h1>Justin | Software Developer </h1>
      </div>
      <nav>
        <div class="hamb" @click="toggleMenu">
          <span :class="{ active: menuOpen }"></span>
          <span :class="{ active: menuOpen }"></span>
          <span :class="{ active: menuOpen }"></span>
        </div>
        <ul class="nav-list" :class="{ open: menuOpen }">
          <li>
            <a 
              :class="{ 'active-link': currentSection === 'home' }" 
              @click.prevent="scrollToSection('home')"
            >
              Home
            </a>
          </li>
          <li>
            <a
              :class="{ 'active-link': currentSection === 'about' }" 
              @click.prevent="scrollToSection('about')"
            >
              About
            </a>
          </li>
          <li>
            <a
              :class="{ 'active-link': currentSection === 'skills' }" 
              @click.prevent="scrollToSection('skills')"
            >
              Skills
            </a>
            </li>
          <li>
            <a 
              :class="{ 'active-link': currentSection === 'project' }"
              @click.prevent="scrollToSection('project')"
            >
              Project
            </a>
          </li>
          <li>
            <a
            :class="{ 'active-link': currentSection === 'experience' }"
            @click.prevent="scrollToSection('experience')"
            >
              Experience
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script src="./js/head-section.js"></script>

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    padding: 17px 0px;
    width: 100%;
    /* background: linear-gradient(90deg, #0E222A 0%, #333333 100%); */
    /* background-color:var(--navbgcolour); */
    z-index: 999;
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
    position: relative;
    color: var(--primarycolor);
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .nav-list li a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    height: 3px;
    width: 0;
    background: #00e3cc;
    box-shadow: 0 0 8px #00e3cc;
    transition: width 0.3s ease;
  }

  .nav-list li a:hover::after {
    width: 100%;
  }

  .nav-list li a:hover {
    color: #00e3cc;
  }

  .nav-list li a.active-link::after {
    width: 100%;
  }

  .nav-list li a.active-link {
    color: #00e3cc;
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
  header {
    background-color: var(--navbgcolour);
  }

  .nav-list {
    display: none; 
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--navbgcolour);
    position: absolute;
    top: 100%;
    left: 0;
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