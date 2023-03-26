<template>
  <div class="container-fluid" :class="{ 'bg-light': !darkMode, 'bg-dark': darkMode }">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-md-6 text-center">
        <!-- Se muestra el logotipo y el título de la aplicación -->
        <img src="./assets/logo.png" alt="Logo" class="logo mb-5" />
        <h1 class="display-4 mb-5" :class="{ 'h1-light': !darkMode, 'h1-dark': darkMode }">Tu Buscador Latino</h1>

        <!-- Botón para cambiar al modo oscuro -->
        <button @click="toggleDarkMode" class="btn btn-primary mb-3 toggle-dark-mode">
          {{ darkMode ? 'Modo claro' : 'Modo oscuro' }}
        </button>

        <!-- Se muestra un formulario personalizado de búsqueda, utilizando otro componente llamado "SearchForm.vue" -->
        <search-form @search="search"></search-form>

        <!-- Si la búsqueda está en progreso, se muestra un spinner que indica que la página está cargando -->
        <div v-if="loading" class="text-center mt-5">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Cargando...</span>
          </div>
        </div>

        <!-- Si se encontraron resultados de búsqueda, se muestra el componente "SearchResults.vue", que muestra los resultados de búsqueda -->
        <search-results v-else-if="results.length > 0" :results="results" :dark-mode="darkMode"></search-results>

        <!-- Si no se han realizado búsquedas todavía, se muestra un mensaje que invita al usuario a realizar una búsqueda -->
        <p v-else class="mt-5" :class="{ 'p-light': !darkMode, 'p-dark': darkMode }">Haz alguna búsqueda para que te aparezcan los resultados.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import './styles/style.scss';

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
      loading: false, // Variable booleana que indica si se está realizando una solicitud de búsqueda
      results: [], // Matriz que contiene los resultados de la búsqueda
      darkMode: false // Variable booleana que indica si se encuentra en modo oscuro
    }
  },

  methods: {
    toggleDarkMode() {
    this.darkMode = !this.darkMode
  },
    search(query) { // Método que se ejecuta cuando se envía el formulario de búsqueda
      this.loading = true // Se cambia la variable "loading" a verdadero, para indicar que se está realizando una búsqueda

      // Se realiza una solicitud HTTP a la API de Wikipedia, utilizando la URL proporcionada
      axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${query}&origin=*&srprop=snippet&exintro=1&prop=info`)
        .then(response => {
          // Si la solicitud se realiza correctamente, se establece la variable "results" en los resultados de la búsqueda
          this.results = response.data.query.search
          this.loading = false // Se cambia la variable "loading" a falso, para indicar que la búsqueda ha terminado
        })
        .catch(error => {
          // Si hay algún error en la solicitud, se muestra un mensaje de error en la consola
          console.log(error)
          this.loading = false // Se cambia la variable "loading" a falso, para indicar que la búsqueda ha terminado
        })
    }
  }
}
</script>