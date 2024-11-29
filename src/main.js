import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Correct router import

// Optional: Ensure this file exists or comment it out if unused.
import './assets/styles.css';

// Create the Vue app and mount it.
createApp(App)
  .use(router)
  .mount('#app');
