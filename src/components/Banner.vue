<template>
  <div class="banner-container">
      <img v-for="item in imgList" :key="item.id" :src="item.src" alt="">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  components: {},
  setup () {
      const imgList = [
      {
        id: '001',
        src: 'https://images.dog.ceo/breeds/dhole/n02115913_253.jpg'
      },
      {
        id: '002',
        src: 'https://images.dog.ceo/breeds/newfoundland/n02111277_3910.jpg'
      },
      {
        id: '003',
        src: 'https://images.dog.ceo/breeds/kuvasz/n02104029_4494.jpg'
      },
      {
        id: '004',
        src: 'https://images.dog.ceo/breeds/dhole/n02115913_253.jpg'
      },
      {
        id: '005',
        src: 'https://images.dog.ceo/breeds/newfoundland/n02111277_3910.jpg'
      }
    ]
    return {
        imgList
    }
  },
})
</script>

<style scoped>
</style>
