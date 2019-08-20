<template>
  <PreviewLayout contentType="app">
    <template v-slot:card>
      <AppCard id="preview-check" v-if="item" :item="item" :preview="true" />
    </template>
    <template v-slot:view>
      <AppView v-if="item" :item="item" :preview="true" />
    </template>
  </PreviewLayout>
</template>

<script>
import { store } from '@/store'
import { fetchAppBySlug } from '@/services/client'
const PreviewLayout = () => import('@/components/PreviewLayout')

export default {
  name: 'AppPreview',
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
