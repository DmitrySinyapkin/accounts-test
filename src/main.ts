import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import Aura from '@primeuix/themes/aura'
import Button from "primevue/button"
import Message from 'primevue/message'

const app = createApp(App)

app.use(createPinia())

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.component('Button', Button)
app.component('Message', Message)

app.mount('#app')
