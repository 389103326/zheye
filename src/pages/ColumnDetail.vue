<template>
  <div>
    <div class="col-12 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar"
               :alt="column.title"
               class="rounded-circle border border-light  w-25 my-3">
          <h5>{{column.title}}</h5>
          <p>{{column.title}}</p>
        </div>
      </div>
    </div>
    <article-list></article-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import ArticleList from '../components/ArticleList.vue'
import { columnDetailData, testData } from '@/utils/testData'
import { ColumnProps } from '@/utils/interface'

export default defineComponent({
  name: 'ColumnDetail',
  components: { ArticleList },
  setup() {
    const route = useRoute()
    const routeId = +route.params.id
    const columnProp: ColumnProps | undefined = testData.find(
      (column) => column.id === routeId
    )
    return {
      column: columnProp
    }
  },
  beforeRouteEnter(to, from, next) {
    next()
  }
})
</script>

<style scoped>
</style>
