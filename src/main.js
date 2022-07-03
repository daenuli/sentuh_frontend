import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import NProgress from 'nprogress'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'nprogress/nprogress.css'

const app = createApp(App)

app.use(router)
app.use(VueAxios,axios)
// app.use(NProgress)

app.mount('#app')
