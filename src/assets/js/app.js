import axios from 'axios'
import SearchForm from '../../components/SearchForm.vue'
import SearchResults from '../../components/SearchResults.vue'

export default {
  components: {
    SearchForm,
    SearchResults
  },

  data() {
    return {
      loading: false, // Variable booleana que indica si se está realizando una solicitud de búsqueda
      results: [], // Matriz que contiene los resultados de la búsqueda
      darkMode: false,// Variable booleana que indica si se encuentra en modo oscuro
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