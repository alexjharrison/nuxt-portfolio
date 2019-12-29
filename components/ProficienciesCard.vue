<template>
  <div
    class="shadow-lg rounded m-5 px-4 pt-4 pb-4 border border-gray-400 bg-white"
  >
    <h3>{{ category }}</h3>
    <hr />
    <div class="flex justify-around text-center mt-4 flex-wrap">
      <div
        v-for="{ img: images, name } in technologies"
        :key="name"
        class="px-4 py-1"
      >
        <div class="flex justify-center">
          <img
            v-for="image in images"
            :key="image"
            class="h-20 w-20"
            :src="require(`~/assets/img/logos/${image}.svg`)"
            alt="fdsa"
          />
        </div>
        <p>{{ name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: { type: String, default: '' },
    technologies: {
      type: Array,
      default: () => [{ img: [], name: '', url: '' }]
    }
  }
}
</script>
