<template>
  <v-app>
    <BaseToolbar :logo-path="$options.static.logoPath" :menu="false">
      <template #titleExtra>
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
import { agency, github } from '@/config'
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
    agency,
    github,
    logoPath: process.env.BASE_URL + 'icjia-logo.png'
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
