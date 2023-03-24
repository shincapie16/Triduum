<template>
  <div class="container my-4">
    <div class="row">
      <div class="col">
        <h1 class="text-center mb-4">Wikipedia Search</h1>
        <search-form @search="search"></search-form>
        <div v-if="loading" class="text-center">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <search-results v-else-if="results.length > 0" :results="results"></search-results>
        <p v-else>No results found.</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SearchForm from './components/SearchForm.vue'
import SearchResults from './components/SearchResults.vue'

export default {
  components: {
    SearchForm,
    SearchResults
  },
  data() {
    return {
      loading: false,
      results: []
    }
  },
  methods: {
    search(query) {
      this.loading = true
      axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${query}&origin=*&srprop=snippet&prop=info`)
        .then(response => {
          this.results = response.data.query.search
          this.loading = false
        })
        .catch(error => {
          console.log(error)
          this.loading = false
        })
    }
  }
}
</script>