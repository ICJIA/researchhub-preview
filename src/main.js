import Vue from 'vue'
import vuetify from './plugins/vuetify'

import ResearchHubLib from 'icjia-research-lib'
import 'icjia-research-lib/style.css'
import 'nprogress/nprogress.css'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(ResearchHubLib)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
