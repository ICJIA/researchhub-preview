<template>
  <div class="font-lato">
    <div class="view-title">
      <v-container class="py-3">
        <v-layout justify-center row wrap>
          <v-flex xs12 sm8 xl6>
            <h3 class="light pb-0">
              <template>{{ 'ICJIA Research Hub' }}</template>
              <v-icon color="white">chevron_right</v-icon>
              <template>{{ 'Preview' }}</template>
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
export default {
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
    onClick() {
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
