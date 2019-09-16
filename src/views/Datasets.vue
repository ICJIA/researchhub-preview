<template>
  <PreviewLayout contentType="dataset">
    <template v-slot:card>
      <DatasetCard
        id="preview-check"
        v-if="item"
        :item="item"
        :preview="true"
      />
    </template>
    <template v-slot:view>
      <DatasetView
        v-if="item"
        :item="item"
        :downloader="downloader"
        :preview="true"
      />
    </template>
  </PreviewLayout>
</template>

<script>
import { store } from '@/store'
import { fetchDatasetBySlug } from '@/services/client'
const DatasetCard = () => import('icjia-research-lib').then(m => m.DatasetCard)
const DatasetView = () => import('icjia-research-lib').then(m => m.DatasetView)
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
      window.open(`/files/${hash}${ext}`, '_blank')
    }
  }
}
</script>
