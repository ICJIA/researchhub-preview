<template>
  <v-app>
    <BaseToolbar :menu="false" logoPath="/icjia-logo.png">
      <template v-slot:titleExtra>
        <span class="font-weight-light"> Preview</span>
      </template>
    </BaseToolbar>

    <v-content>
      <router-view v-if="alive" />

      <ServerError v-else />
    </v-content>

    <Footer :agency="$options.static.agency" :github="$options.static.github" />
  </v-app>
</template>

<script>
import { healthCheck } from '@/services/client'
import { BaseToolbar } from 'icjia-research-lib'
const Footer = () => import('icjia-research-lib').then(m => m.Footer)
const ServerError = () => import('./components/ServerError')

export default {
  name: 'App',
  components: {
    BaseToolbar,
    Footer,
    ServerError
  },
  data() {
    return {
      alive: true
    }
  },
  async created() {
    this.alive = await healthCheck()
  },
  static: {
    agency: {
      name: 'Illinois Criminal Justice Information Authority',
      url: 'http://www.icjia.state.il.us/'
    },
    github: {
      url: 'https://github.com/icjia/icjia-research-preview',
      version: '1.0.0-beta.5'
    }
  }
}
</script>

<style>
.error-page {
  font-size: 1.25rem;
  font-family: 'Lato';
  text-align: center;
  margin-top: 5%;
}

.error-page h1 {
  font-family: 'Lato';
  text-transform: uppercase;
  font-weight: bold;
}
</style>
