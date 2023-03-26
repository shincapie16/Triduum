<template>
  <div class="table-container" :class="{ 'table-container-dark': darkMode }">
    <table class="table" :class="{ 'table-light': !darkMode, 'table-dark': darkMode }">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titulo</th>
          <th scope="col">Snippet</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(result, index) in results" :key="result.pageid">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ result.title }}</td>
          <td v-html="stripTags(result.snippet)"></td>
        </tr>
      </tbody>  
    </table>
  </div>
</template>

<style lang="scss">
@import '../assets/styles/style.scss';
</style>
<script src="../assets/js/search.js"></script>