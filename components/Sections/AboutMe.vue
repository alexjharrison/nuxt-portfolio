<template>
  <div id="about-me">
    <section-header text="About Me" />
    <div
      class="px-5 py-12 text-gray-900 mx-auto text-xl font-light leading-relaxed"
    >
      <p>
        I'm a web developer based out of central/north Jersey with a passion for
        building efficient &amp; responsive web apps
      </p>
      <p class="mt-6">
        My background is in building automation software for a dental ceramics
        manufacturer. I am effective at designing and creating highly functional
        user-focused applications using the most effective tools for the job
      </p>
      <p class="mt-6">
        I currently work as a web developer for STI Firestop bulding internal
        applications and modernizing the company website
      </p>
    </div>
  </div>
</template>

<script>
import SectionHeader from '../SectionHeader'
import IntersectionObserver from '~/mixins/IntersectionObserver'
export default {
  components: {
    SectionHeader
  },
  mixins: [IntersectionObserver],
  data() {
    return {
      id: 'about-me'
    }
  }
}
</script>
