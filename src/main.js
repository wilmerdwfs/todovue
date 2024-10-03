import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/global.css'; // Importa los estilos globales
import router from './router'; // Importa el router

createApp(App)
  .use(router) // Usa el router
  .mount('#app')
