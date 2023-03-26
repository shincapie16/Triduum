<template>
  <div class="container-fluid" :class="{ 'bg-light': !darkMode, 'bg-dark': darkMode }">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-md-6 text-center">
        <!-- Se muestra el logotipo y el título de la aplicación -->
        <img src="./assets/img/logo.png" alt="Logo" class="logo mb-5" />
        <h1 class="display-4 mb-5" :class="{ 'h1-light': !darkMode, 'h1-dark': darkMode }">Tu Buscador Latino</h1>

        <!-- Botón para cambiar al modo oscuro -->
        <button @click="toggleDarkMode" class="btn btn-primary mb-3 toggle-dark-mode">
          {{ darkMode ? 'Modo claro' : 'Modo oscuro' }}
        </button>

        <!-- Se muestra un formulario personalizado de búsqueda, utilizando otro componente llamado "SearchForm.vue" -->
        <search-form @search="search"></search-form>

        <!-- Si la búsqueda está en progreso, se muestra un spinner que indica que la página está cargando -->
        <div v-if="loading" class="text-center mt-5">
          <div class="spinner-border text-info" role="status">
            <span class="sr-only">...</span>
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
@import './assets/styles/style.scss';

</style>

<script src="./assets/js/app.js"></script>