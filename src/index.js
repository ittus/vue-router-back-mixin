export default {
  data() {
    return {
      fromRoute: undefined
    }
  },
  beforeRouteEnter (to, from, next) {
    next((vm) => {
      vm.fromRoute = from.name
    })
  },
  methods: {
    backMixin_handleBack(fallBackUrl) {
      if (this.fromRoute) {
        this.$router.back()
      } else {
        this.$router.push(fallBackUrl || '/')
      }
    }
  },
}