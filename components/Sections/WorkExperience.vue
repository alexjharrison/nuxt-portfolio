<template>
  <div id="work-experience">
    <section-header text="Work Experience" />
    <experience-education-card
      v-for="job in workExperience"
      :key="job.header"
      v-bind="job"
      class="m-5"
    />
  </div>
</template>

<script>
import SectionHeader from '../SectionHeader'
import IntersectionObserver from '~/mixins/IntersectionObserver'
import ExperienceEducationCard from '~/components/ExperienceEducationCard'
import workExperience from '~/assets/data/workExperience'
export default {
  components: { SectionHeader, ExperienceEducationCard },
  mixins: [IntersectionObserver],
  data() {
    return {
      id: 'work-experience',
      workExperience
    }
  }
}
</script>
