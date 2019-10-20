<template>
  <div id="education">
    <section-header text="Education" />
    <div class="flex flex-wrap md:flex-no-wrap">
      <experience-education-card
        v-for="school in education"
        :key="school.header"
        v-bind="school"
        class="m-5 md:w-1/2 w-full"
      />
    </div>
  </div>
</template>

<script>
import SectionHeader from '../SectionHeader'
import IntersectionObserver from '~/mixins/IntersectionObserver'
import ExperienceEducationCard from '~/components/ExperienceEducationCard'
import education from '~/assets/data/education'
export default {
  components: { SectionHeader, ExperienceEducationCard },
  mixins: [IntersectionObserver],
  data() {
    return {
      id: 'education',
      education
    }
  }
}
</script>
