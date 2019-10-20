<template>
  <div></div>
</template>

<script>
export default {
  props: {
    category: { type: String, default: '' },
    technology: { type: Array, default: () => [{ img: '', name: '' }] }
  }
}
</script>
