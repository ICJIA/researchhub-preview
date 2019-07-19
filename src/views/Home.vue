<template>
  <v-container pt-0>
    <v-layout justify-center row wrap>
      <v-flex xs12>
        <Warning />
      </v-flex>

      <v-flex xs12 sm9>
        <SubmissionList
          v-if="apps && apps.length"
          :results="apps"
          contentType="apps"
        />
        <SubmissionList
          v-if="articles && articles.length"
          :results="articles"
          contentType="articles"
        />
        <SubmissionList
          v-if="datasets && datasets.length"
          :results="datasets"
          contentType="datasets"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { store, mutations } from '@/store'
import { fetchApps, fetchArticles, fetchDatasets } from '@/services/client'
const SubmissionList = () => import('@/components/SubmissionList')
const Warning = () => import('@/components/Warning')

export default {
  components: {
    SubmissionList,
    Warning
  },
  computed: {
    apps() {
      return store.apps
    },
    articles() {
      return store.articles
    },
    datasets() {
      return store.datasets
    }
  },
  async mounted() {
    if (!store.ready) {
      mutations.setApps(await fetchApps())
      mutations.setArticles(await fetchArticles())
      mutations.setDatasets(await fetchDatasets())
      mutations.setReady(true)
    }
  }
}
</script>
