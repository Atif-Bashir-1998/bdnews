<template>
  <div class="grid md:grid-cols-5 md:gap-8 p-2 md:py-28 md:px-96">
    <div class="col-span-1 space-y-4 order-2 md:order-none">
      <NewsSnippet v-for="(news, index) in leftSnippets" :key="index" :title="news.title" :description="news.description" />
    </div>
    <div class="md:col-span-3 order-1 md:order-none border-b-2 mb-4 md:border-none">
      <Headline :title="headlineSnippet.title" :description="headlineSnippet.description" :image="headlineSnippet.image" />
    </div>
    <div class="col-span-1 space-y-4 order-3 md:order-none">
      <NewsSnippet v-for="(news, index) in rightSnippets" :key="index" :title="news.title" :description="news.description" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NewsSnippet from './NewsSnippet.vue';
import Headline from './Headline.vue';

const leftSnippets = ref([
  {
    title: 'Health warning about Nipah virus',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
  },
  {
    title: 'AL candidate Abdus Salmam nomination scrapped',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    title: '308 new dengue cases, 2 more deaths',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
  },
])

const rightSnippets = ref([
{
    title: 'Health warning about Nipah virus',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500",
  },
  {
    title: 'AL candidate Abdus Salmam nomination scrapped',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    title: '308 new dengue cases, 2 more deaths',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha",
  },
])

const headlineSnippet = ref({
  title: 'Awami League cedes 7 seats to 14 party allies',
  description: 'Three of these seats will be contested by JASAD, three by the Workers Party, and one by the Jatiya Party JP',
  image: 'https://wallpapercave.com/wp/wp3210388.jpg'
})
</script>