<template>
  <v-app>
    <BaseToolbar :menu="false">
      <template v-slot:titleExtra>
        <span class="light"> Preview</span>
      </template>
    </BaseToolbar>

    <v-content>
      <router-view v-if="alive" />

      <ServerError v-else />
    </v-content>

    <Footer :agency="agency" :github="github" />
  </v-app>
</template>

<script>
import { healthCheck } from '@/services/client'
const ServerError = () => import('./components/ServerError')

export default {
  name: 'App',
  components: {
    ServerError
  },
  data() {
    return {
      alive: true,
      agency: {
        name: 'Illinois Criminal Justice Information Authority',
        url: 'http://www.icjia.state.il.us/'
      },
      github: {
        url: 'https://github.com/icjia/icjia-research-preview',
        version: '0.3.2'
      }
    }
  },
  async created() {
    this.alive = await healthCheck()
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
