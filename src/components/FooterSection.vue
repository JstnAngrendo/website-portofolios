<template>
  <footer class="footer">
    <div class="footer-content">

      <div class="footer-left">
        <h2 class="action-text">Let's Connect</h2>
        <div class="button-group">
          <a href="mailto:jluvian25@gmail.com" class="techno-button">Contact Me</a>
        </div>
      </div>

      <div class="footer-right">
        <div class="footer-section contact">
          <h3>Contact Info</h3>
          <p><font-awesome-icon icon="fa-solid fa-envelope" /> jluvian25@gmail.com</p>
          <p><font-awesome-icon icon="fa-brands fa-whatsapp" /> +62 853-6206-0468</p>
          <p><font-awesome-icon icon="fa-solid fa-location-dot" /> Jakarta, Indonesia</p>
        </div>

        <div class="footer-section nav-links">
          <h3>Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
          </ul>
        </div>
      </div>

    </div>

    <div class="footer-social">
      <a href="https://wa.me/6285362060468" target="_blank"><font-awesome-icon icon="fa-brands fa-whatsapp" /></a>
      <a href="https://www.linkedin.com/in/justin-angrendo" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
      <a href="https://github.com/JstnAngrendo" target="_blank"><font-awesome-icon icon="fa-brands fa-github" /></a>
      <a href="mailto:jluvian25@gmail.com" target="_blank"><font-awesome-icon icon="fa-solid fa-envelope" /></a>
      <a href="https://www.instagram.com/justinluvian_" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Justin Luvian Angrendo — All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600;700&display=swap');

.footer {
  background-color: var(--navbgcolour);
  color: var(--primarycolor);
  padding: 1rem 2rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1000px;
  margin: auto;
  align-items: flex-start;
}

.footer-right {
  margin-top: 1rem;
  flex: 1;
  min-width: 280px;
  align-self: flex-start;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-right {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: flex-end;
}

.footer-section {
  min-width: 200px;
}

.footer-section h3 {
  font-size: 18px;
}

.footer-section p,
.footer-section li,
.footer-section a {
  font-size: 14px;
  color: var(--primarycolor);
  margin: 5px 0;
  text-decoration: none;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section a:hover,
.footer-social a:hover {
  color: #b4f8e5;
}

.action-text {
  font-family: 'Raleway', sans-serif;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.4;
  color: var(--primarycolor);
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

.footer-social {
  margin: 30px 0 10px;
  text-align: center;
}

.footer-social a {
  margin: 0 10px;
  font-size: 20px;
  color: var(--primarycolor);
  transition: color 0.3s;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 10px;
  text-align: center;
  font-size: 12px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
  }

  .footer-right {
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
  }

  .footer-left {
    margin-bottom: 2rem;
    margin: 0 auto;
  }
}

</style>