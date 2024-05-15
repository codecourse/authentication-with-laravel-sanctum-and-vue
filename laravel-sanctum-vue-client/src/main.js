import './assets/main.css'
import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import useAuth from "@/composables/useAuth.js";

axios.defaults.baseURL = 'http://laravel-sanctum-vue-api.test'
axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

const { attempt } = useAuth()

const app = createApp(App)

app.use(router)

attempt().then(() => {
    app.mount('#app')
})
