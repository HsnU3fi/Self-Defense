import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import i18n from './plugins/i18n'

Vue.use(PerfectScrollbar)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
