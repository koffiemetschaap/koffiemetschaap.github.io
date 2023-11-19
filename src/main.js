import { createApp } from 'vue'
import {createHead} from '@unhead/vue'
import './assets/scss/style.scss'
import App from './App.vue'

const app = createApp(App)
const head = createHead()
app.use(head)
app.mount('#app')
