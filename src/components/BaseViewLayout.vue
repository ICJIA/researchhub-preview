<template>
  <div class="font-lato">
    <BaseViewTitle :view="view" @toggle-view="onToggleView" />

    <div class="text-center my-2">
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
