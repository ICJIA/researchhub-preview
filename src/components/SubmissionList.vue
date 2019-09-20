<template>
  <div>
    <h2 class="text-capitalize">{{ contentType }}</h2>
    <ul>
      <li v-for="result in results" :key="result.title" class="my-2 font-lato">
        <template>{{ result.date.slice(0, 10) + ' | ' }}</template>

        <router-link :to="`${contentType}/${result.slug}`">
          <span class="large">{{ result.title }}</span>
        </router-link>

        <template v-if="result.external">
          <v-icon class="marker-external pl-1" small>{{
            $options.static.mdiCharity
          }}</v-icon>
          <span class="marker-external small">
            <template>{{ 'This is an external contribution' }}</template>
          </span>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import { mdiCharity } from '@mdi/js'

export default {
  props: {
    results: {
      type: Array,
      default: null
    },
    contentType: {
      type: String,
      default: ''
    }
  },
  static: {
    mdiCharity
  }
}
</script>
