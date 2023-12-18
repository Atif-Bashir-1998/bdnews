<template>
  <div :style="{ backgroundImage: `url(${image})` }" class="text-white w-full relative h-64 md:h-[640px] bg-cover">
    <div class="absolute inset-0 bg-black opacity-20"></div>
    <div class="inset-0 flex-col justify-end p-6 hidden md:absolute md:flex">
      <p>{{ meta.sport }}</p>
      <a :href="url" class="text-3xl font-bold mb-2 hover:text-red-600 cursor-pointer">{{ title }}</a>
      <div class="flex items-center space-x-4">
        <p>{{ meta.source }}</p>
        <p> • </p>
        <p>{{ meta.posted }}</p>
        <p> • </p>
        <p>{{ meta.read_time }}</p>
      </div>
      <p class="text-lg">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  meta: {
    type: Object,
    required: true,
  },
  url: {
    type: String,
    required: true
  }
});
</script>

<style scoped>

</style>
