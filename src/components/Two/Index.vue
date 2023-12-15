<template>
  <div class="grid md:grid-cols-5 md:gap-8 p-2 md:py-28 md:px-48">
    <div class="md:col-span-3 border-r-2 pr-4">
      <Headline :title="headlineSnippet.title" :description="headlineSnippet.description" :image="headlineSnippet.image" />
    </div>
    <div class="col-span-1 grid md:grid-cols-2 gap-4 items-start">
      <BusinessSnippet v-for="(news, index) in snippets" :key="index" :title="news.title" :image="news.image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Headline from './Headline.vue'
import BusinessSnippet from './BusinessSnippet.vue';

const headlineSnippet = ref({
  title: 'Disney, Reliance plan meeting for India media merger talks',
  description: "Disney and Reliance have held talks to merge their India businesses by forming a joint venture company in which Ambani's media unit would hold a majority stake",
  image: 'https://wallpapers.com/images/hd/news-background-73dcj6vvsjotkrde.jpg'
})

const snippets = ref([
  {
    image: 'https://wallpapers.com/images/hd/news-background-73dcj6vvsjotkrde.jpg',
    title: 'Pfizer shares sink',
  },
  {
    image: 'https://wallpapers.com/images/hd/news-background-73dcj6vvsjotkrde.jpg',
    title: 'The Night agent tops Netflix most watched shows',
  },
  {
    image: 'https://wallpapers.com/images/hd/news-background-73dcj6vvsjotkrde.jpg',
    title: 'How Shein outgrew Zara and H&M and pioneered fast-fashion 2.0',
  },
  {
    image: 'https://wallpapers.com/images/hd/news-background-73dcj6vvsjotkrde.jpg',
    title: 'onions to roll in from 10 countries',
  },
])
</script>