<template>
  <div id="proficiencies">
    <section-header text="Proficiencies" />
    <proficiencies-card
      v-for="prof in proficiencies"
      :key="prof.category"
      v-bind="prof"
    />
  </div>
</template>

<script>
import SectionHeader from '../SectionHeader'
import IntersectionObserver from '~/mixins/IntersectionObserver'
import proficiencies from '~/assets/data/proficiencies.js'
import ProficienciesCard from '~/components/ProficienciesCard'
export default {
  components: { SectionHeader, ProficienciesCard },
  mixins: [IntersectionObserver],
  data() {
    return {
      id: 'proficiencies',
      proficiencies
    }
  }
}
</script>
