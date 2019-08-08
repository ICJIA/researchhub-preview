<template>
  <div class="view-title">
    <v-container class="py-3">
      <v-layout justify-center row wrap>
        <v-flex xs12 sm8 xl6>
          <h3 class="light pb-0">
            <template>{{ 'ICJIA Research Hub' }}</template>
            <v-icon color="white">chevron_right</v-icon>
            <template>{{ 'Preview' }}</template>
            <template v-if="page">
              <v-icon color="white">chevron_right</v-icon>{{ page }}
            </template>
          </h3>
        </v-flex>

        <v-flex xs12 sm2>
          <v-layout justify-end v-if="view !== null">
            <v-btn class="ma-0" color="white" small outline @click="onClick">
              <template>{{ view ? 'show card' : 'show view' }}</template>
            </v-btn>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: ''
    },
    view: {
      type: Boolean,
      default: null
    }
  },
  methods: {
    onClick() {
      this.$emit('toggle-view')
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
