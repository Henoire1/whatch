import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'; // Importez le routeur

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router); // Utilisez le routeur
app.mount('#app')
