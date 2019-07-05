import Vue from 'vue'
import './plugins/vuetify'

import 'icjia-research-lib/lib/index.css'
import 'nprogress/nprogress.css'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
