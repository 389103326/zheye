<template>
  <div class="my-container">
    <!-- <banner /> -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Banner from './components/vue-swiper/banner.vue'

export default defineComponent({
  name: 'App',
  components: {
    // Banner
  }
})
</script>

<style>
</style>
