<template>
  <BaseViewLayout>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm10 xl8>
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
  </BaseViewLayout>
</template>

<script>
import { store, mutations } from '@/store'
import { fetchApps, fetchArticles, fetchDatasets } from '@/services/client'
const BaseViewLayout = () => import('@/components/BaseViewLayout')
const SubmissionList = () => import('@/components/SubmissionList')

export default {
  components: {
    BaseViewLayout,
    SubmissionList
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
      const [apps, articles, datasets] = await Promise.all([
        fetchApps(),
        fetchArticles(),
        fetchDatasets()
      ])
      mutations.setApps(apps)
      mutations.setArticles(articles)
      mutations.setDatasets(datasets)
      mutations.setReady(true)
    }
  }
}
</script>
