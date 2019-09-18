import Vue from 'vue'
import Vuetify, {
  VAppBar,
  VDialog,
  VFooter,
  VNavigationDrawer
} from 'vuetify/lib'
import { ResearchHubLibIcons } from 'icjia-research-lib'

Vue.use(Vuetify, {
  components: {
    VAppBar,
    VDialog,
    VFooter,
    VNavigationDrawer
  }
})

export default new Vuetify({
  theme: { disable: true },
  icons: {
    iconfont: 'mdiSvg',
    values: { ...ResearchHubLibIcons }
  }
})
