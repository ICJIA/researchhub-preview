<template>
  <v-app>
    <RHBaseToolbar>
      <template v-slot:titleExtra>
        <span class="light"> Preview</span>
      </template>
    </RHBaseToolbar>

    <router-view v-if="alive" />

    <ServerError v-else />

    <RHFooter :agency="agency" :github="github" />
  </v-app>
</template>

<script>
import { healthCheck } from '@/services/client'
const RHBaseToolbar = () =>
  import('icjia-research-lib/lib/cjs').then(lib => lib.BaseToolbar)
const RHFooter = () =>
  import('icjia-research-lib/lib/cjs').then(lib => lib.Footer)
const ServerError = () => import('./components/ServerError')

export default {
  name: 'App',
  components: {
    RHBaseToolbar,
    RHFooter,
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
        version: '0.1.0'
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
