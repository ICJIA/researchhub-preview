<template>
  <v-app>
    <RHBaseToolbar>
      <template v-slot:titleExtra>
        <span class="light"> Preview</span>
      </template>
    </RHBaseToolbar>

    <router-view />

    <RHFooter :agency="agency" :github="github" />
  </v-app>
</template>

<script>
const RHBaseToolbar = () =>
  import('icjia-research-lib/lib/cjs').then(lib => lib.BaseToolbar)
const RHFooter = () =>
  import('icjia-research-lib/lib/cjs').then(lib => lib.Footer)

export default {
  name: 'App',
  components: {
    RHBaseToolbar,
    RHFooter
  },
  data() {
    return {
      agency: {
        name: 'Illinois Criminal Justice Information Authority',
        url: 'http://www.icjia.state.il.us/'
      },
      github: {
        url: '/',
        version: '0.1.0'
      }
    }
  }
}
</script>
