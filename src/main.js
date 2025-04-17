import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import 'aos/dist/aos.css';
import AOS from 'aos';

const app = createApp(App);

app.use(router);

AOS.init({
  // delay: 50,
  // anchorPlacement: 'top-bottom',
  offset: 120,
  duration: 800,
  easing: 'ease-in-out',
  once: false,
});

app.config.globalProperties.$aos = AOS;

app.mount('#app');