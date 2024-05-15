import './assets/main.css'
import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

axios.defaults.baseURL = 'http://laravel-sanctum-vue-api.test'
axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

const app = createApp(App)

app.use(router)

app.mount('#app')
