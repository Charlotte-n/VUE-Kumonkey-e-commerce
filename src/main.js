import '@/styles/common.scss'
import 'animate.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { getCatogry } from './apis/test'
import {LazyPlugin} from "@/directives/LazyImag";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
//注册全局组件
import {componentPlugin} from '@/components/index'

getCatogry().then(res=>{
    console.log(res);
})
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(LazyPlugin)
app.use(componentPlugin)
app.mount('#app')