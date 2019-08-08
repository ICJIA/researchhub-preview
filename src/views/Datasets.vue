<template>
  <PreviewLayout contentType="dataset">
    <template v-slot:card>
      <RHDatasetCard
        id="preview-check"
        v-if="item"
        :item="item"
        :preview="true"
      />
    </template>
    <template v-slot:view>
      <RHDatasetView
        v-if="item"
        :item="item"
        :downloader="downloader"
        :preview="true"
      />
    </template>
  </PreviewLayout>
</template>

<script>
import { saveAs } from 'file-saver'
import { store } from '@/store'
import { fetchDatasetBySlug } from '@/services/client'
const PreviewLayout = () => import('@/components/PreviewLayout')
const RHDatasetCard = () =>
  import('icjia-research-lib/lib/cjs').then(lib => lib.DatasetCard)
const RHDatasetView = () =>
  import('icjia-research-lib/lib/cjs').then(lib => lib.DatasetView)

export default {
  name: 'DatasetPreview',
  components: {
    PreviewLayout,
    RHDatasetCard,
    RHDatasetView
  },
  data() {
    return {
      item: null
    }
  },
  async mounted() {
    const slug = this.$route.params.slug.split('/').pop()
    if (store.ready) {
      this.item = store.datasets.filter(el => el.slug === slug)[0]
    } else {
      this.item = await fetchDatasetBySlug(slug)
    }
  },
  methods: {
    async downloader() {
      const file = this.item.datafile
      const url = `${process.env.VUE_APP_API_BASE_URL}/${file.url}`
      saveAs(url, decodeURI(file.name))
    }
  }
}
</script>
