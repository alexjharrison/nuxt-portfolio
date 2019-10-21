<template>
  <picture v-if="imgUrl" :class="className">
    <source :alt="imgAlt" :src="require(`~/assets/${imgName}?webp`)" type="image/webp" />
    <source :alt="imgAlt" :src="require(`~/assets/${imgName}`)" type="image/png" />
    <img :src="require(`~/assets/${imgName}`)" :alt="imgAlt" />
  </picture>
</template>

<script>
export default {
  props: ['imgName', 'className', 'imgAlt']
}
</script>