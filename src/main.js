import { createApp } from 'vue'
import '@/css/style.css'
import App from '@/App.vue'
import router from '@/router/index'
import store from '@/store'

createApp(App).use(router).use(store).mount('#app')