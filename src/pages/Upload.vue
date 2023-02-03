<template>
  <div>
    this is Upload
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Upload',
  components: {},
  props: {
    action: {
      type: String,
      required: true
    }
  },
  setup() {
    return {}
  },
  beforeRouteEnter() {
    console.log('beforeRouteEnter')
  }
})
</script>

<style scoped>
</style>
