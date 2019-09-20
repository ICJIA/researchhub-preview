<template>
  <BaseViewLayout :view.sync="view">
    <template>
      <div v-show="view">
        <slot v-if="contentType === 'article'" name="view"></slot>

        <v-col v-else class="mx-auto" cols="12" sm="10" lg="8" xl="7">
          <slot name="view"></slot>
        </v-col>
      </div>

      <v-col v-show="!view" class="mx-auto" cols="12" sm="10" lg="8" xl="7">
        <slot v-if="contentType === 'article'" name="card"></slot>

        <v-col
          v-else
          class="mx-auto"
          cols="12"
          sm="6"
          :lg="contentType === 'app' ? 4 : 6"
        >
          <slot name="card"></slot>
        </v-col>
      </v-col>
    </template>
  </BaseViewLayout>
</template>

<script>
const BaseViewLayout = () => import('@/components/BaseViewLayout')

export default {
  components: {
    BaseViewLayout
  },
  props: {
    contentType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      view: true
    }
  }
}
</script>
