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
import { store } from '@/store'
import { fetchArticleBySlug } from '@/services/client'
const ArticleCard = () => import('icjia-research-lib').then(m => m.ArticleCard)
const ArticleView = () => import('icjia-research-lib').then(m => m.ArticleView)
const PreviewLayout = () => import('@/components/PreviewLayout')

export default {
  name: 'ArticlePreview',
  components: {
    ArticleCard,
    ArticleView,
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
      const { hash, ext } = this.item[`${type}file`]
      window.open(`/files/${hash}${ext}`, '_blank')
    }
  }
}
</script>
