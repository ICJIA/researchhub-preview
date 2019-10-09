<template>
  <div>
    <BaseViewTitle
      :page="$route.path.split('/')[1]"
      :view="view"
      @toggle-view="onToggleView"
    />

    <div class="font-lato text-center my-2">
      <v-icon color="warning">{{ $options.static.mdiAlert }}</v-icon>
      <template>{{ ' This page is for preview only.' }}</template>
    </div>

    <slot></slot>
  </div>
</template>

<script>
import { mdiAlert } from '@mdi/js'
const BaseViewTitle = () => import('@/components/BaseViewTitle')

export default {
  components: {
    BaseViewTitle
  },
  props: {
    view: Boolean
  },
  methods: {
    onToggleView() {
      this.$emit('update:view', !this.view)
    }
  },
  static: {
    mdiAlert
  }
}
</script>

<style scoped>
.view-title {
  color: white;
  background-color: #466c8c;
}
</style>
