

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import dotenv from 'dotenv'; 

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { /*ACA VAN LOS ICONOS*/ } from "oh-vue-icons/icons";
addIcons(/*ACA VAN LOS ICONOS*/);

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
