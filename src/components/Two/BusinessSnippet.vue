<template>
  <div>
    <img :src="image" class="w-full md:w-32 mb-4" />

    <p class="font-bold text-lg">{{ title }}</p>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
})
</script>