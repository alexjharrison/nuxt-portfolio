<template>
  <div class="flex antialiased text-gray-800">
    <sidebar class="hidden sm:block w-56" />
    <div class="w-full bg-gray-100">
      <app-header />
      <about-me />
      <projects />
      <proficiencies />
      <work-experience />
      <education />
      <contact />
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar/Sidebar'
import AppHeader from '~/components/Sections/Header'
import AboutMe from '~/components/Sections/AboutMe'
import Projects from '~/components/Sections/Projects'
import Proficiencies from '~/components/Sections/Proficiencies'
import WorkExperience from '~/components/Sections/WorkExperience'
import Education from '~/components/Sections/Education'
import Contact from '~/components/Sections/Contact'
export default {
  components: {
    Sidebar,
    AppHeader,
    AboutMe,
    Projects,
    Proficiencies,
    WorkExperience,
    Education,
    Contact
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
