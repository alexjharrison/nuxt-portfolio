<script>
export default {
  data() {
    return {
      intersectionObserver: null
    }
  },
  mounted() {
    this.intersectionObserver = new IntersectionObserver((entries) => {
      const firstEntry = entries[0]
      if (firstEntry.isIntersecting) {
        this.$store.commit('setSection', this.id)
      }
    })

    const thisDiv = document.getElementById(this.id)
    this.intersectionObserver.observe(thisDiv)
  },
  beforeDestroyed() {
    this.intersectionObserver.disconnect()
  }
}
</script>
