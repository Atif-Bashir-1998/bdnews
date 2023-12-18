<template>
  <div class="md:gap-8 p-2 md:py-28 lg:px-48">
    <Highlight :title="selectedHighlight.title" :description="selectedHighlight.description" :image="selectedHighlight.image" :meta="selectedHighlight.meta" :url="selectedHighlight.url" />

    <div id="highlights-section" class="overflow-x-scroll">
      <div class="flex min-w-fit overflow-x-auto h-24">
        <div v-for="(highlight, index) in highlights" :key="index" @click="selectedHighlightIndex = index" class="w-64 flex h-full px-4 items-center cursor-pointer hover:text-red-600" :class="[selectedHighlightIndex === index ? 'bg-gray-200' : 'bg-gray-100']">
          <!-- Add a minimum width (adjust as needed) and prevent text wrapping -->
          <p :class="[index === selectedHighlightIndex ? 'font-bold' : '']">{{ highlight.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Highlight from './Highlight.vue';
import { computed, ref } from 'vue';

const highlights = ref([
  {
    title: 'Pakistan look to be positive against Australia team',
    url: 'https://www.google.com/',
    description: 'Pakistan captain Shan Masood said there was no question of playing for anything less than a win at Perth Stadium',
    meta: {
      read_time: '2 min read',
      posted: '2 hours ago',
      source: 'Reuters',
      sport: 'Cricket'
    },
    image: 'https://resources.pulse.icc-cricket.com/ICC/photo/2022/12/06/6aa585fd-4655-4f66-84f5-689e326df386/Haris-Ruaf.jpg'
  },
  {
    title: 'Pakistan look to be positive against Australia team',
    url: 'https://www.google.com/',
    description: 'FIFA chief hails access for women to Iran stadium as sign of progress',
    meta: {
      read_time: '2 min read',
      posted: '2 hours ago',
      source: 'Reuters',
      sport: 'Cricket'
    },
    image: 'https://png.pngtree.com/background/20230522/original/pngtree-nfl-football-player-wallpaper-picture-image_2695597.jpg'
  },
  {
    title: 'Pakistan look to be positive against Australia team',
    url: 'https://www.google.com/',
    description: 'Pakistan captain Shan Masood said there was no question of playing for anything less than a win at Perth Stadium',
    meta: {
      read_time: '2 min read',
      posted: '2 hours ago',
      source: 'Reuters',
      sport: 'Cricket'
    },
    image: 'https://resources.pulse.icc-cricket.com/ICC/photo/2022/12/06/6aa585fd-4655-4f66-84f5-689e326df386/Haris-Ruaf.jpg'
  },
  {
    title: 'FIFA chief hails access for women to Iran',
    url: 'https://www.google.com/',
    description: 'FIFA chief hails access for women to Iran stadium as sign of progress',
    meta: {
      read_time: '2 min read',
      posted: '2 hours ago',
      source: 'Reuters',
      sport: 'Cricket'
    },
    image: 'https://resources.pulse.icc-cricket.com/ICC/photo/2022/12/06/6aa585fd-4655-4f66-84f5-689e326df386/Haris-Ruaf.jpg'
  },
  {
    title: 'Pakistan look to be positive against Australia team',
    url: 'https://www.google.com/',
    description: 'Pakistan captain Shan Masood said there was no question of playing for anything less than a win at Perth Stadium',
    meta: {
      read_time: '2 min read',
      posted: '2 hours ago',
      source: 'Reuters',
      sport: 'Cricket'
    },
    image: 'https://png.pngtree.com/background/20230522/original/pngtree-nfl-football-player-wallpaper-picture-image_2695597.jpg'
  },
  {
    title: 'FIFA chief hails access for women to Iran',
    url: 'https://www.google.com/',
    description: 'FIFA chief hails access for women to Iran stadium as sign of progress',
    meta: {
      read_time: '2 min read',
      posted: '2 hours ago',
      source: 'Reuters',
      sport: 'Cricket'
    },
    image: 'https://resources.pulse.icc-cricket.com/ICC/photo/2022/12/06/6aa585fd-4655-4f66-84f5-689e326df386/Haris-Ruaf.jpg'
  },
  {
    title: 'Pakistan look to be positive against Australia team',
    url: 'https://www.google.com/',
    description: 'Pakistan captain Shan Masood said there was no question of playing for anything less than a win at Perth Stadium',
    meta: {
      read_time: '2 min read',
      posted: '2 hours ago',
      source: 'Reuters',
      sport: 'Cricket'
    },
    image: 'https://png.pngtree.com/background/20230522/original/pngtree-nfl-football-player-wallpaper-picture-image_2695597.jpg'
  },
  {
    title: 'FIFA chief hails access for women to Iran',
    url: 'https://www.google.com/',
    description: 'FIFA chief hails access for women to Iran stadium as sign of progress',
    meta: {
      read_time: '2 min read',
      posted: '2 hours ago',
      source: 'Reuters',
      sport: 'Cricket'
    },
    image: 'https://resources.pulse.icc-cricket.com/ICC/photo/2022/12/06/6aa585fd-4655-4f66-84f5-689e326df386/Haris-Ruaf.jpg'
  },
  {
    title: 'Pakistan look to be positive against Australia team',
    url: 'https://www.google.com/',
    description: 'FIFA chief hails access for women to Iran stadium as sign of progress',
    meta: {
      read_time: '2 min read',
      posted: '2 hours ago',
      source: 'Reuters',
      sport: 'Cricket'
    },
    image: 'https://resources.pulse.icc-cricket.com/ICC/photo/2022/12/06/6aa585fd-4655-4f66-84f5-689e326df386/Haris-Ruaf.jpg'
  },
  {
    title: 'FIFA chief hails access for women to Iran',
    url: 'https://www.google.com/',
    description: 'FIFA chief hails access for women to Iran stadium as sign of progress',
    meta: {
      read_time: '2 min read',
      posted: '2 hours ago',
      source: 'Reuters',
      sport: 'Cricket'
    },
    image: 'https://resources.pulse.icc-cricket.com/ICC/photo/2022/12/06/6aa585fd-4655-4f66-84f5-689e326df386/Haris-Ruaf.jpg'
  },
])

const selectedHighlightIndex = ref(0)

const selectedHighlight = computed(() => highlights.value[selectedHighlightIndex.value])
</script>

<style scoped>
#highlights-section::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

#highlights-section::-webkit-scrollbar
{
  height: 20px;
	width: 12px;
	background-color: #F5F5F5;
}

#highlights-section::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #050f3d;
}

</style>