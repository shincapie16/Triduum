export default {
    props: {
    results: {
      type: Array,
      required: true
    },
    darkMode: {
      type: Boolean,
      required: true
    }
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
  