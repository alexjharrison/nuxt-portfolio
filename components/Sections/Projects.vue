<template>
  <div id="projects" class="mt-2">
    <section-header text="Projects" />
    <div class="flex flex-wrap justify-around">
      <project-card v-for="(proj, i) in projects" :key="i" v-bind="proj" />
    </div>
  </div>
</template>

<script>
import SectionHeader from '../SectionHeader'
import IntersectionObserver from '~/mixins/IntersectionObserver'
import projects from '~/assets/data/projects'
import ProjectCard from '~/components/ProjectCard'
export default {
  components: { SectionHeader, ProjectCard },
  mixins: [IntersectionObserver],
  data() {
    return {
      id: 'projects',
      projects
    }
  }
}
</script>
