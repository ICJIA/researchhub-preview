import Vue from 'vue'
import Vuetify, { VAppBar, VFooter, VNavigationDrawer } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VAppBar,
    VFooter,
    VNavigationDrawer
  }
})

export default new Vuetify({
  theme: { disable: true }
})
