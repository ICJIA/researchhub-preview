<template>
  <v-app>
    <BaseToolbar :logo-path="$options.static.logoPath" :menu="false">
      <template #titleExtra>
        <span class="font-weight-light"> Preview</span>
      </template>
    </BaseToolbar>

    <v-main>
      <AlertCOVID ref="alert" />
      <router-view v-if="alive" />
      <ServerError v-else />
    </v-main>

    <Footer :agency="$options.static.agency" :github="$options.static.github" />
  </v-app>
</template>

<script>
import { github } from '@/config'
import { healthCheck } from '@/services/client'
import { BaseToolbar } from 'researchhub-lib'
const AlertCOVID = () => import('researchhub-lib').then(m => m.AlertCOVID)
const Footer = () => import('researchhub-lib').then(m => m.Footer)
const ServerError = () => import('./components/ServerError')

export default {
  name: 'App',
  components: {
    AlertCOVID,
    BaseToolbar,
    Footer,
    ServerError
  },
  data() {
    return {
      alive: true
    }
  },
  watch: {
    $route() {
      if (this.$refs.alert) this.$refs.alert.reset()
    }
  },
  async created() {
    this.alive = await healthCheck()
  },
  static: {
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
