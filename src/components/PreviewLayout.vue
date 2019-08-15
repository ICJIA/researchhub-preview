<template>
  <BaseViewLayout :view.sync="view">
    <template>
      <div v-show="view">
        <div v-if="contentType === 'article'">
          <slot name="view"></slot>
        </div>

        <v-row v-else justify="center">
          <v-col cols="12" sm="10" lg="8" xl="7">
            <slot name="view"></slot>
          </v-col>
        </v-row>
      </div>

      <v-row v-show="!view" justify="center">
        <v-col cols="12" sm="10" lg="8" xl="7">
          <v-row v-if="contentType === 'app'" justify="center">
            <v-col cols="12" sm="6" lg="4">
              <slot name="card"></slot>
            </v-col>
          </v-row>

          <template v-if="contentType === 'article'">
            <slot name="card"></slot>
          </template>

          <v-row v-if="contentType === 'dataset'" justify="center">
            <v-col cols="12" xl="6">
              <slot name="card"></slot>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
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
    contentType: String
  },
  data() {
    return {
      view: true
    }
  }
}
</script>
