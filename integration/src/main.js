import './assets/main.css'

import './assets/style.scss'

import 'primevue/resources/themes/aura-light-teal/theme.css'
import 'primeicons/primeicons.css'


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(PrimeVue)

app.use(createPinia())
app.use(router)

app.mount('#app')
