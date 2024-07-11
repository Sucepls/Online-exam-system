import './main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vue3-toastify/dist/index.css'
import 'vue-loading-overlay/dist/css/index.css';
import "vazirmatn/Vazirmatn-font-face.css";
import vueAwesomeSidebar from 'vue-awesome-sidebar'
import 'vue-awesome-sidebar/dist/vue-awesome-sidebar.css'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import vueMiddleware from 'vue-middleware'


import App from './App.vue'
import router from './router'
import AuthGuard from "@/middleware/AuthGuard";

const app = createApp(App)
app.component('VueDatePicker', VueDatePicker);
app.use(createPinia())
app.use(vueAwesomeSidebar)
app.use(router)
app.use(vueMiddleware, { middleware: { AuthGuard } })

app.mount('#app')
