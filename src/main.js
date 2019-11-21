import Vue from 'vue'
import vuetify from './plugins/vuetify'

import 'researchhub-lib/style.css'
import 'nprogress/nprogress.css'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
