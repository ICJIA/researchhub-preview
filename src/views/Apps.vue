<template>
  <PreviewLayout content-type="app">
    <template #card>
      <AppCard
        v-if="item"
        id="preview-check"
        :horizontal="$vuetify.breakpoint.smOnly"
        :item="item"
        :preview="true"
      />
    </template>
    <template #view>
      <AppView v-if="item" :item="item" :preview="true" />
    </template>
  </PreviewLayout>
</template>

<script>
import { store } from '@/store'
import { fetchAppBySlug } from '@/services/client'
const AppCard = () => import('researchhub-lib').then(m => m.AppCard)
const AppView = () => import('researchhub-lib').then(m => m.AppView)
const PreviewLayout = () => import('@/components/PreviewLayout')

export default {
  name: 'AppPreview',
  components: {
    AppCard,
    AppView,
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
      const app = store.ready
        ? store.apps.filter(el => el.slug === slug)[0]
        : await fetchAppBySlug(slug)

      if (app) this.item = app
      else throw 'Error: Item not found.'
    } catch {
      this.$router.push({ name: '404' })
    }
  }
}
</script>
