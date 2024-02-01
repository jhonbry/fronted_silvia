
// import './style.css'
import App from './App.vue'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {router} from "./routes/routes.js"
import { Quasar } from 'quasar'
import axios from 'axios'

import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'

const app = createApp(App)
const pinia = createPinia()

app.use(Quasar, {
    plugins: {
      
    }
})

app.use(pinia)
app.use(router)
// axios.deafaulst.baseURL = 'https://backend-abxx.onrender.com/api/'


app.mount('#app')
