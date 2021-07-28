<template>
  <div>
    this is
  </div>
</template>

<script>
import { fetchUserRepositories } from '../api/repositories'
import { ref } from 'vue'

export default {
  name: 'UserRepositories',
  props: {
    user: {
      type: string,
      required: true
    }
  },
  setup(props, context) {
    let repositories = ref([])
    const getUserRepositories = async () => {
      repositories = await fetchUserRepositories(props.user)
    }

    onMounted(() => {
      getUserRepositories()
    })

    watch(user, (newValue, oldValue) => {
      getUserRepositories()
    })

    return {
      repositories,
      getUserRepositories
    }
  },
  data() {
    return {
      filters: {},
      searchQurey: ''
    }
  },
  components: {
    RepositoriesFilters,
    RepositoriesSortBy,
    RepositoriesList
  },
  computed: {
    filteredRepositories() {},
    repositoriesMatchingSearchQuery() {}
  },
  watch: {
    user: 'getUserRepositories'
  },
  methods: {
    getUserRepositories() {},
    updateFilters() {}
  }
}
</script>

<style>
</style>