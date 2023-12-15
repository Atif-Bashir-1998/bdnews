<template>
  <div>
    <img :src="image" class="h-96 mb-4" />

    <p class="font-bold text-2xl mb-2">{{ title }}</p>
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
  }
})
</script>