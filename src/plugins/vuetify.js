import Vue from 'vue'
import Vuetify, { VAppBar, VNavigationDrawer } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VAppBar,
    VNavigationDrawer
  }
})

export default new Vuetify({
  theme: { disable: true }
})
