<template>
  <header class="relative">
    <picture>
      <source
        class="w-full h-64 object-cover"
        :srcset="require('~/assets/img/keyboard.jpg?webp')"
        type="image/webp"
        alt="typing on keyboard"
      />
      <img
        class="w-full h-64 object-cover"
        :src="require('~/assets/img/keyboard.jpg')"
        alt="typing on keyboard"
      />
    </picture>
    <!-- <img-src-set
      class="w-full h-64 object-cover"
      img-name="img/keyboard.jpg"
      img-format="jpg"
      img-alt="typing on keyboard"
    />-->
    <div
      class="absolute bottom-0 right-0 text-gray-200 text-right p-8 leading-tight"
    >
      <h1 class="font-bold text-5xl">Alex Harrison</h1>
      <h2 class="text-xl">Building Cool Things Daily</h2>
    </div>
  </header>
</template>
