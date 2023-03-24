import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import jquery from 'jquery'
import popper from 'popper.js'

window.$ = jquery
window.Popper = popper
createApp(App).use(router).mount('#app')
