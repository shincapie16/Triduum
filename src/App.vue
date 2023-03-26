<template>
  <div class="container-fluid bg-light">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-md-6 text-center">
        <img src="./assets/logo1.png" alt="Logo" class="logo mb-5" />
        <h1 class="display-4 mb-5">Tu Buscador Latino</h1>
        <search-form @search="search"></search-form>
        <div v-if="loading" class="text-center mt-5">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Cargando...</span>
          </div>
        </div>
        <search-results v-else-if="results.length > 0" :results="results"></search-results>
        <p v-else class="mt-5">Haz alguna búsqueda para que te aparezcan los resultados.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './styles/style.scss';

/* ... estilos del componente ... */
</style>

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
      axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${query}&origin=*&srprop=snippet&exintro=1&prop=info`)

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

<!-- Aquí se vincula el archivo styles.css -->
