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