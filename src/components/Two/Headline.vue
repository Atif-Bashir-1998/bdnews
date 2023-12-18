<template>
  <div>
    <img :src="image" class="h-96 mb-4" />

    <a :href="url" class="font-bold text-2xl mb-2 hover:text-red-600">{{ title }}</a>
    <p class="text-gray-700">{{ description }}</p>
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