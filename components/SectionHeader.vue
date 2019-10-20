<template>
  <div class="bg-teal-500 text-gray-200 text-3xl px-4 py-2 flex">
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
export default {
  props: { text: { type: String, default: '' } }
}
</script>
