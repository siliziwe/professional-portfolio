import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import AOS from 'aos'
import 'aos/dist/aos.css'

import 'bootstrap-vue/dist/bootstrap-vue'
import 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(AOS)
  .mount('#app')
  