import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'
import './assets/style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInstagram, faLinkedin, faGithub, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faInstagram, faLinkedin, faGithub, faFacebookSquare, faEnvelope, faArrowLeft);

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')
