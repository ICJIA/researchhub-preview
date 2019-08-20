<template>
  <PreviewLayout contentType="article">
    <template v-slot:card>
      <ArticleCard
        id="preview-check"
        v-if="item"
        :item="item"
        :preview="true"
      />
    </template>
    <template v-slot:view>
      <ArticleView
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
import { fetchArticleBySlug } from '@/services/client'
const PreviewLayout = () => import('@/components/PreviewLayout')

export default {
  name: 'ArticlePreview',
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
      const article = store.ready
        ? store.articles.filter(el => el.slug === slug)[0]
        : await fetchArticleBySlug(slug)

      if (article) this.item = article
      else throw 'Error: Item not found.'
    } catch {
      this.$router.push({ name: '404' })
    }
  },
  methods: {
    async downloader(type) {
      const file = this.item[`${type}file`]
      const url = `${process.env.VUE_APP_API_BASE_URL}/${file.url}`
      saveAs(url, decodeURI(file.name))
    }
  }
}
</script>
