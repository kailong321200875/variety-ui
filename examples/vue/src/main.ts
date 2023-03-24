import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { defineCustomElements } from '@view-design/variety/loader'

defineCustomElements()

createApp(App).mount('#app')
