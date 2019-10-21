<template>
  <div class="bg-blue-600 text-white text-3xl px-4 py-2 flex">
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
export default {
  props: { text: { type: String, default: '' } }
}
</script>
