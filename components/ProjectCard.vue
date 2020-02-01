<template>
  <div
    class="shadow-lg rounded m-5 px-4 pt-4 pb-4 border border-gray-400 bg-white w-full xl:w-2/5 max-w-3xl self-start"
  >
    <img :src="getUrl(image)" :alt="name + ' screenshot'" />
    <div class="flex justify-between">
      <h3 class="my-5 font-bold text-4xl">{{ name }}</h3>
      <div class="flex">
        <a v-if="git" class="text-blue-600 text-sm" :href="git" target="_blank">
          <picture>
            <source
              class="h-16 mr-4"
              :srcset="require('~/assets/img/github-logo.png?webp')"
              alt="github logo"
              type="image/webp"
            />
            <img
              class="h-16 mr-4"
              src="~assets/img/github-logo.png"
              alt="github logo"
            /> </picture
        ></a>
        <a
          v-if="link"
          class="text-blue-600 text-sm"
          :href="link"
          target="_blank"
        >
          <picture>
            <source
              class="h-16 mr-4"
              :srcset="require('~/assets/img/gotolink.png?webp')"
              alt="github logo"
              type="image/webp"
            />
            <img
              class="h-16 mr-4"
              src="~assets/img/gotolink.png"
              alt="github logo"
            /> </picture
        ></a>
      </div>
    </div>
    <div>
      <p>{{ description }}</p>
      <div class="mt-3">
        <h4>Tech:</h4>
        <ul class="ml-6 mb-2">
          <li v-for="t in tech" :key="t" class="list-disc">{{ t }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '' },
    git: { type: String, default: null },
    link: { type: String, default: '' },
    description: { type: String, default: '' },
    image: { type: String, default: '' },
    tech: { type: Array, default: () => [] }
  },
  data() {
    return {}
  },
  methods: {
    getUrl(img) {
      return require('assets/img/projects/' + img)
    }
  }
}
</script>
