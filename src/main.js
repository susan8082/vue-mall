import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from "vue-resource"
import { BootstrapVue, IconsPlugin, BadgePlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BadgePlugin)
Vue.use(VueResource)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
