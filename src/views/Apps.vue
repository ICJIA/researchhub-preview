<template>
  <PreviewLayout contentType="app">
    <template v-slot:card>
      <RHAppCard id="preview-check" v-if="item" :item="item" />
    </template>
    <template v-slot:view>
      <RHAppView v-if="item" :item="item" />
    </template>
  </PreviewLayout>
</template>

<script>
import { store } from '@/store'
import { fetchAppBySlug } from '@/services/client'
const PreviewLayout = () => import('@/components/PreviewLayout')
const RHAppCard = () =>
  import('icjia-research-lib/lib/cjs').then(lib => lib.AppCard)
const RHAppView = () =>
  import('icjia-research-lib/lib/cjs').then(lib => lib.AppView)

export default {
  name: 'AppPreview',
  components: {
    PreviewLayout,
    RHAppCard,
    RHAppView
  },
  data() {
    return {
      item: null
    }
  },
  async mounted() {
    const slug = this.$route.params.slug.split('/').pop()
    if (store.ready) {
      this.item = store.apps.filter(el => el.slug === slug)[0]
    } else {
      this.item = await fetchAppBySlug(slug)
    }
  }
}
</script>
