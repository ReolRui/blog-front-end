import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'


import VueCookies from 'vue-cookies'


Vue.use(mavonEditor)



Vue.use(VueCookies)

Vue.config.productionTip = false




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')