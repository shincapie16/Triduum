<template>
    <form @submit.prevent="search">
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="query" placeholder="Search Wikipedia...">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="submit">Search</button>
        </div>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: ''
      }
    },
    methods: {
      search() {
        this.$emit('search', this.query)
      }
    }
  }
  </script>