export const toggleMixin = {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    },
  },
}
