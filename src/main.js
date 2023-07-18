import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { getCatogry } from './apis/test'
import {LazyPlugin} from "@/directives/LazyImag";

getCatogry().then(res=>{
    console.log(res);
})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(LazyPlugin)
app.mount('#app')