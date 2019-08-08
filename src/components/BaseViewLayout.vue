<template>
  <div class="font-lato">
    <BaseViewTitle :view="view" @toggle-view="onToggleView" />

    <div class="text-xs-center my-2">
      <v-icon color="warning">warning</v-icon>
      <template>{{ ' This page is for preview only.' }}</template>
    </div>

    <template v-if="fullView">
      <slot></slot>
    </template>
    <v-container v-else>
      <slot></slot>
    </v-container>
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
    },
    fullView: {
      type: Boolean,
      default: false
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
