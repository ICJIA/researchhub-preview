<template>
  <v-container>
    <h2>{{ contentTypeUpper }}</h2>
    <ul>
      <li v-for="result in results" :key="result.title" class="my-2 font-lato">
        <template>{{ result.date.slice(0, 10) + ' | ' }}</template>

        <router-link :to="`${contentType}/${result.slug}`">
          <span class="large">{{ result.title }}</span>
        </router-link>

        <span v-if="result.external" class="external small">
          <v-icon class="external">favorite</v-icon>
          <span>This is an external contribution</span>
        </span>
      </li>
    </ul>
  </v-container>
</template>

<script>
export default {
  props: {
    results: Array,
    contentType: String
  },
  computed: {
    contentTypeUpper() {
      return (
        this.contentType.charAt(0).toUpperCase() + this.contentType.slice(1)
      )
    }
  }
}
</script>
