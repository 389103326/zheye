<template>
  <div class="banner-container">
    <swiper :pagination="true">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Pagination } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Pagination])

export default defineComponent({
  name: '',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.banner-container {
  width: 100vw;
  height: 37.1vw;
}
</style>
