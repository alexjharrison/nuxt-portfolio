<template>
  <picture v-if="imgName" :class="className">
    <source
      :alt="imgAlt"
      :src="require(`~/assets/${imgName}?webp`)"
      type="image/webp"
    />
    <source
      :alt="imgAlt"
      :src="require(`~/assets/${imgName}`)"
      :type="`image/${imgFormat}`"
    />
    <img :src="require(`~/assets/${imgName}`)" :alt="imgAlt" />
  </picture>
</template>

<script>
export default {
  props: {
    imgName: { type: String, default: '' },
    className: { type: String, default: '' },
    imgAlt: { type: String, default: '' },
    imgFormat: { type: String, default: '' }
  }
}
</script>
