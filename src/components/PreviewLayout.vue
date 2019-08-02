<template>
  <BaseViewLayout
    :view.sync="view"
    :fullView="contentType === 'article' && view"
  >
    <template>
      <div v-show="view">
        <v-flex v-if="contentType === 'article'" xs12>
          <slot name="view"></slot>
        </v-flex>

        <v-layout v-else justify-center>
          <v-flex xs12 sm10 md8>
            <slot name="view"></slot>
          </v-flex>
        </v-layout>
      </div>

      <v-layout v-show="!view" row wrap justify-center>
        <v-flex xs12 sm10 xl8>
          <v-layout v-if="contentType === 'app'" row wrap justify-center>
            <v-flex xs12 sm6 lg4>
              <slot name="card"></slot>
            </v-flex>
          </v-layout>

          <template v-if="contentType === 'article'">
            <slot name="card"></slot>
          </template>

          <v-layout v-if="contentType === 'dataset'" row wrap justify-center>
            <v-flex xs12 xl6>
              <slot name="card"></slot>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
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
