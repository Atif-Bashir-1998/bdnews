<template>
  <div class="border-b-2 pb-4">
    <p class="font-bold text-xl hover:text-red-600 cursor-pointer mb-2">{{ title }}</p>

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
  }
})
</script>