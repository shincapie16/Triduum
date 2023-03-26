<template>
  <form @submit.prevent="search" class="d-flex justify-content-center align-items-center">
    <div class="input-group">
      <input type="text" class="form-control" v-model="query" placeholder="Encuentra lo que necesitas en Tu Buscador Latino...">
      <button class="btn btn-primary" type="submit">Buscar</button>
    </div>
  </form>
</template>

<style lang="scss">
@import '../assets/styles/style.scss';
</style>
<script src="../assets/js/form.js"></script>