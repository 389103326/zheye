<template>
  <div class="container">
    <global-header :user="user" />
    <column-list :list="list" />
    <footer></footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList from '../components/ColumnList.vue'
import GlobalHeader from '../components/GlobalHeader.vue'
import { testData, currentUser } from '../utils/testData'

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList,
    GlobalHeader
  },
  setup() {
    return {
      list: testData,
      user: currentUser
    }
  }
})
</script>

<style>
</style>
