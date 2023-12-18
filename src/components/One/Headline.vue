<template>
  <div>
    <img :src="image" class="h-96 mb-4" />

    <a class="font-bold text-2xl mb-2" :href="url">{{ title }}</a>
    <p class="text-gray-700 hidden md:block">{{ description }}</p>
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
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  }
})
</script>