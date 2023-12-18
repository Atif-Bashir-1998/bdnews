<template>
  <div>
    <img :src="image" class="w-full md:w-32 mb-4" />

    <a :href="url" class="font-bold text-lg hover:text-red-600">{{ title }}</a>
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
  },
  url: {
    type: String,
    required: true,
  }
})
</script>