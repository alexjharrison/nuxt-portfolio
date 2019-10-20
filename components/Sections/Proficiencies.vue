<template>
  <div id="proficiencies">
    <section-header text="Proficiencies" />
    <h1>Proficiencies</h1>
  </div>
</template>

<script>
import SectionHeader from '../SectionHeader'
import IntersectionObserver from '~/mixins/IntersectionObserver'
export default {
  components: { SectionHeader },
  mixins: [IntersectionObserver],
  data() {
    return {
      id: 'proficiencies'
    }
  }
}
</script>
