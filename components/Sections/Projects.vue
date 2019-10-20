<template>
  <div id="projects" class="mt-2">
    <section-header text="Projects" />
    <h1>Projects</h1>
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
      id: 'projects'
    }
  }
}
</script>
