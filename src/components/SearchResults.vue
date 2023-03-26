<template>
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
</template>
<style lang="scss">
@import '../styles/style.scss';

</style>
<script>
export default {
  props: {
    results: {
      type: Array,
      required: true
    }
  },
  darkMode: {
      type: Boolean,
      required: true
    },
  methods: {
  stripTags(str) {
    let div = document.createElement('div');
    div.innerHTML = str;
    let text = div.textContent || div.innerText || '';
    return text.trim();
  }
}
}

</script>