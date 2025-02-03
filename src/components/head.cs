
<style scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: var(--fifthcolor);
  padding: 16px 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo h1 {
  color: var(--primarycolor);
  font-size: 24px;
  /* padding-right: 16px; */
}

nav {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  /* width: auto; */
}

/* .nav-list li {
  padding: 8px 16px;
} */

.nav-list li a {
  color: var(--primarycolor);
  font-size: 16px;
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

@media (max-width: 768px) {
  .hamb {
    display: block; /* Show hamburger menu */
  }

  .nav-list {
    display: none; /* Hide nav-list initially */
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
    display: flex; /* Show nav-list when open */
  }

  .nav-list li {
    width: 100%; /* Full width for list items */
    text-align: left;
  }
}

</style>
