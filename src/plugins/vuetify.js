import Vue from 'vue'
import Vuetify, {
  VAppBar,
  VDialog,
  VFooter,
  VNavigationDrawer
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VAppBar,
    VDialog,
    VFooter,
    VNavigationDrawer
  }
})

export default new Vuetify({
  theme: { disable: true }
})
