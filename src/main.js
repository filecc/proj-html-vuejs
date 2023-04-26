import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../src/styles/general.scss'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
