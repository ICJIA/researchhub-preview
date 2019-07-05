<template>
  <PreviewLayout contentType="article">
    <template v-slot:card>
      <RHArticleCard id="preview-check" v-if="item" :item="item" />
    </template>
    <template v-slot:view>
      <RHArticleView v-if="item" :item="item" />
    </template>
  </PreviewLayout>
</template>

<script>
import { store } from '@/store'
import { fetchArticleBySlug } from '@/services/client'
const PreviewLayout = () => import('@/components/PreviewLayout')
const RHArticleCard = () =>
  import('icjia-research-lib/lib/cjs').then(lib => lib.ArticleCard)
const RHArticleView = () =>
  import('icjia-research-lib/lib/cjs').then(lib => lib.ArticleView)

export default {
  name: 'ArticlePreview',
  components: {
    PreviewLayout,
    RHArticleCard,
    RHArticleView
  },
  data() {
    return {
      item: null
    }
  },
  async mounted() {
    const slug = this.$route.params.slug.split('/').pop()
    this.item = store.ready
      ? store.articles.filter(el => el.slug === slug)[0]
      : await fetchArticleBySlug(slug)
  }
}
</script>
