import { createApp } from 'vue'
import {router} from './router'
import App from './App.vue'
import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'

axios.defaults.baseURL = ("http://localhost:8080")
axios.defaults.timeout = 30000;

createApp(App).use(ElementPlus).use(router).mount('#app')
