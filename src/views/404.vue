<template>
  <div>
    <BaseViewTitle page="Error" />

    <div class="error-page">
      <v-icon color="error" x-large>{{
        $options.static.mdiCloseCircle
      }}</v-icon>
      <h1 class="pb-4">Page not found</h1>

      <p>Sorry. The page you are looking for does not exist.</p>
      <v-btn text to="/">
        <template>{{ 'return to home' }}</template>
        <v-icon>{{ $options.static.mdiUndo }}</v-icon>
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
  static: {
    mdiCloseCircle,
    mdiUndo
  }
}
</script>
