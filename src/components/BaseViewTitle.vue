<template>
  <div class="view-title">
    <v-col class="mx-auto py-2" cols="12" sm="10" lg="8" xl="7">
      <v-row align="center" no-gutters>
        <h4 class="light">
          <template>{{ 'ICJIA Research Hub' }}</template>
          <v-icon color="white">mdi-chevron-right</v-icon>
          <template>{{ 'Preview' }}</template>
          <template v-if="page">
            <v-icon color="white">mdi-chevron-right</v-icon>{{ page }}
          </template>
        </h4>

        <v-spacer></v-spacer>

        <v-btn color="white" height="24" outlined small @click="onClick">
          <span class="small">{{ view ? 'show card' : 'show view' }}</span>
        </v-btn>
      </v-row>
    </v-col>
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
      default: true
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
