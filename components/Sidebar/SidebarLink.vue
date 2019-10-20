<template>
  <div>
    <li
      class="text-xl mt-1 pl-2 border-l-2 border-transparent hover:border-red-500 hover:text-gray-900 text-gray-700 cursor-pointer"
      :class="highlighted"
      @click="scroll"
    >
      {{ name }}
    </li>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    slug: { type: String, default: '' }
  },
  computed: {
    highlighted() {
      return this.$store.state.section === this.slug ? 'border-red-500' : ''
    }
  },
  methods: {
    scroll() {
      const el = document.getElementById(this.slug)
      this.$scrollTo(el)
    }
  }
}
</script>
