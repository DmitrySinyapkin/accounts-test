import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import Aura from '@primeuix/themes/aura'
import { 
    Button,
    Message,
    DataView,
    InputText,
    Password,
    Select
} from 'primevue'

const app = createApp(App)

app.use(createPinia())

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.component('Button', Button)
app.component('Message', Message)
app.component('DataView', DataView)
app.component('InputText', InputText)
app.component('Password', Password)
app.component('Select', Select)

app.mount('#app')
