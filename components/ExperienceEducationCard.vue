<template>
  <div class="shadow-lg rounded px-4 pt-4 pb-8 border border-gray-400 bg-white">
    <div
      class="flex border-b border-gray-500 items-center justify-between flex-wrap"
    >
      <h3 class="text-2xl text-gray-800 my-2">{{ header }}</h3>
      <picture v-if="headerImg">
        <source
          :srcset="require('~/assets/img/' + headerImg + '?webp')"
          :alt="`${header} logo`"
          type="image/webp"
        />
        <source
          :srcset="require('~/assets/img/' + headerImg)"
          :alt="`${header} logo`"
          type="image/png"
        />
        <img
          :src="require('~/assets/img/' + headerImg)"
          :alt="`${header} logo`"
          class="h-16 object-scale-down mt-4 mb-2"
        />
      </picture>
    </div>
    <div class="xl:flex xl:border-0">
      <div class="border-b border-gray-500 xl:border-0 pt-4 pb-2 my-auto">
        <p v-for="line in overviewLines" :key="line" class="my-1">{{ line }}</p>
      </div>
      <div v-if="responsibilities.length > 0" class="pt-4 mx-auto lg:my-4">
        <h4>Responsibilities</h4>
        <ul class="pt-4">
          <li
            v-for="rb in responsibilities"
            :key="rb"
            class="list-disc list-inside"
          >
            {{ rb }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: { type: String, default: '' },
    headerImg: { type: String, default: '' },
    overviewLines: { type: Array, default: () => [] },
    responsibilities: { type: Array, default: () => [] }
  }
}
</script>
