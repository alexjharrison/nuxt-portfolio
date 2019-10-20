<template>
  <div id="contact" class="mb-10">
    <section-header text="Contact" />
    <div class="py-2 px-5">
      <a
        class="text-blue-600 text-2xl flex items-center my-5"
        href="https://github.com/alexjharrison"
        ><img
          class="h-16 mr-4"
          src="~assets/img/github-logo.png"
          alt="github logo"
        />github.com/alexjharrison</a
      >
      <a
        class="text-blue-600 text-2xl flex items-center my-5"
        href="https://www.linkedin.com/in/alexanderjharrison/"
        ><img
          class="h-16 mr-4"
          src="~assets/img/linkedin-logo.png"
          alt="github logo"
        />linkedin.com/in/alexanderjharrison/</a
      >
      <a
        class="text-blue-600 text-2xl flex items-center my-5"
        href="alexjharrison@gmail.com"
        ><img
          class="h-16 mr-4"
          src="~assets/img/email.png"
          alt="github logo"
        />alexjharrison@gmail.com</a
      >
    </div>
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
      id: 'contact'
    }
  }
}
</script>
