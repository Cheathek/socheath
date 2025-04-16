// import { createApp } from 'vue'
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";

// // import 'aos/dist/aos.css'
// import App from './App.vue'
// import router from './router'

// createApp(App)
//     .use(router)
//     .mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// Import AOS CSS and JS
import 'aos/dist/aos.css';
import AOS from 'aos';

const app = createApp(App);

// Use Vue Router
app.use(router);

// Initialize AOS
app.config.globalProperties.$aos = AOS;
app.use(AOS.init({
  duration: 800, // Duration of animations
  easing: 'ease-in-out', // Easing type
  once: true, // Animations only happen once
}));

// Mount the app
app.mount('#app');