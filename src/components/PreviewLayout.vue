<template>
  <div>
    <v-layout justify-center row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <Warning />
      </v-flex>
      <v-flex xs12 sm2>
        <v-switch v-model="view" :label="`Full view: ${view.toString()}`" />
      </v-flex>
    </v-layout>

    <div v-show="view">
      <v-flex v-if="contentType === 'article'" xs12>
        <slot name="view"></slot>
      </v-flex>

      <v-container v-else>
        <v-layout justify-center>
          <v-flex xs12 sm10 md8>
            <slot name="view"></slot>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-container v-show="!view">
      <v-layout row wrap justify-center>
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
    </v-container>
  </div>
</template>

<script>
const Warning = () => import('@/components/Warning')

export default {
  components: {
    Warning
  },
  props: {
    contentType: String
  },
  data() {
    return {
      view: false
    }
  }
}
</script>
