<template>
  <div>
    <BaseViewTitle :page="page" :view="view" @toggle-view="onToggleView" />

    <div class="font-lato text-center my-2">
      <v-icon color="warning">mdi-alert</v-icon>
      <template>{{ ' This page is for preview only.' }}</template>
    </div>

    <slot></slot>
  </div>
</template>

<script>
const BaseViewTitle = () => import('@/components/BaseViewTitle')

export default {
  components: {
    BaseViewTitle
  },
  props: {
    view: {
      type: Boolean,
      default: null
    }
  },
  computed: {
    page() {
      const contentType = this.$route.path.split('/')[1]
      return contentType.charAt(0).toUpperCase() + contentType.slice(1)
    }
  },
  methods: {
    onToggleView() {
      this.$emit('update:view', !this.view)
    }
  }
}
</script>

<style scoped>
.view-title {
  color: white;
  background-color: #466c8c;
}
</style>
