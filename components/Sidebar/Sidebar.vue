<template>
  <aside class="border-r border-gray-600 h-screen shadow-2xl sticky top-0">
    <div
      class="text-center border-b border-gray-600 cursor-pointer"
      @click="scroll"
    >
      <picture>
        <source
          :srcset="require('~/assets/img/alex-photo.jpg?webp')"
          alt="alex portrait"
          class="mx-auto rounded-full p-4 h-64 object-cover"
          type="image/webp"
        />
        <source
          :srcset="require('~/assets/img/alex-photo.jpg')"
          alt="alex portrait"
          class="mx-auto rounded-full p-4 h-64 object-cover"
          type="image/jpeg"
        />
        <img
          src="~assets/img/alex-photo.jpg"
          alt="alex portrait"
          class="mx-auto rounded-full p-4 h-64 object-cover"
        />
      </picture>
      <p class="text-2xl">Alex Harrison</p>
      <p class="text-lg font-serif mb-6">Full Stack Web Dev</p>
    </div>
    <ul class="mt-6 border-b border-gray-600 pb-8">
      <sidebar-link v-for="link in sections" :key="link.slug" v-bind="link" />

      <li
        class="text-xl mt-4 pl-2 border-l-2 border-transparent hover:border-red-500 hover:text-blue-800 text-blue-600"
      >
        <a
          href="https://aharrison.xyz/Alex%20Harrison%20Resume%202018.pdf"
          target="_blank"
          rel="noreferrer noopener"
          >Resume</a
        >
      </li>
    </ul>
  </aside>
</template>

<script>
import sections from '~/assets/data/pageSections'
import SidebarLink from '~/components/Sidebar/SidebarLink'
export default {
  components: {
    SidebarLink
  },
  data() {
    return { sections }
  },
  methods: {
    scroll() {
      const el = document.getElementsByTagName('header')[0]
      this.$scrollTo(el)
    }
  }
}
</script>
