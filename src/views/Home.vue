<template>
  <BaseViewLayout>
    <v-row justify="center">
      <v-col cols="12" sm="10" lg="8" xl="7">
        <SubmissionList
          v-if="apps && apps.length"
          content-type="apps"
          :results="apps"
        />
        <SubmissionList
          v-if="articles && articles.length"
          content-type="articles"
          :results="articles"
        />
        <SubmissionList
          v-if="datasets && datasets.length"
          content-type="datasets"
          :results="datasets"
        />
      </v-col>
    </v-row>
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
