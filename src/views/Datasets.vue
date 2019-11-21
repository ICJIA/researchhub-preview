<template>
  <PreviewLayout content-type="dataset">
    <template #card>
      <DatasetCard
        v-if="item"
        id="preview-check"
        :item="item"
        :preview="true"
      />
    </template>
    <template #view>
      <DatasetView
        v-if="item"
        :downloader="downloader"
        :item="item"
        :preview="true"
      />
    </template>
  </PreviewLayout>
</template>

<script>
import { filesBaseURL } from '@/config'
import { store } from '@/store'
import { fetchDatasetBySlug } from '@/services/client'
const DatasetCard = () => import('researchhub-lib').then(m => m.DatasetCard)
const DatasetView = () => import('researchhub-lib').then(m => m.DatasetView)
const PreviewLayout = () => import('@/components/PreviewLayout')

export default {
  name: 'DatasetPreview',
  components: {
    DatasetCard,
    DatasetView,
    PreviewLayout
  },
  data() {
    return {
      item: null
    }
  },
  async created() {
    try {
      const slug = this.$route.params.slug.split('/').pop()
      const dataset = store.ready
        ? store.datasets.filter(el => el.slug === slug)[0]
        : await fetchDatasetBySlug(slug)

      if (dataset) this.item = dataset
      else throw 'Error: Item not found.'
    } catch {
      this.$router.push({ name: '404' })
    }
  },
  methods: {
    async downloader() {
      const { hash, ext } = this.item.datafile
      window.open(filesBaseURL + `/${hash}${ext}`, '_blank')
    }
  }
}
</script>
