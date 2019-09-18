<template>
  <div>
    <BaseViewTitle page="Error" />

    <div class="error-page">
      <v-icon x-large color="error">{{ mdiCloseCircle }}</v-icon>
      <h1 class="pb-4">Page not found</h1>

      <p>Sorry. The page you are looking for does not exist.</p>
      <v-btn text to="/">
        <template>{{ 'return to home' }}</template>
        <v-icon>{{ mdiUndo }}</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mdiCloseCircle, mdiUndo } from '@mdi/js'
const BaseViewTitle = () => import('@/components/BaseViewTitle')

export default {
  components: {
    BaseViewTitle
  },
  data() {
    return {
      mdiCloseCircle,
      mdiUndo
    }
  }
}
</script>
