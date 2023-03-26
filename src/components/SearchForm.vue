<template>
    <form @submit.prevent="search">
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="query" placeholder="Encuentra lo que necesitas en Tu Buscador Latino...">
        <div class="input-group-append">
          <button class="btn btn-primary" type="submit">Buscar</button>
        </div>
      </div>
    </form>
  </template>
  
  <style lang="scss">
  @import '../assets/styles/style.scss';
  </style>
  <script src="../assets/js/form.js"></script>