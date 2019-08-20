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
import { saveAs } from 'file-saver'
import { store } from '@/store'
import { fetchDatasetBySlug } from '@/services/client'
const PreviewLayout = () => import('@/components/PreviewLayout')

export default {
  name: 'DatasetPreview',
  components: {
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
      const file = this.item.datafile
      const url = `${process.env.VUE_APP_API_BASE_URL}/${file.url}`
      saveAs(url, decodeURI(file.name))
    }
  }
}
</script>
