<template>
  <div class="px-4 xl:px-32 py-8 mt-16 bg-gray-100">
    <div class="hidden md:block">
      <Swiper :modules="modules" :navigation="true" :pagination="pagination">
        <SwiperSlide v-for="news in spotlightNews">
          <div class="h-full grid md:grid-cols-2 border-2">
            <img class="" :src="news.image" />

            <div class="flex flex-col gap-4 w-full h-full justify-center md:px-16">
              <a :href="news.url" class="font-bold text-2xl hover:text-red-600">{{ news.title }}</a>

              <p class="text-gray-700">{{ news.description }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="block md:hidden">
      <Swiper :modules="modules" :pagination="pagination">
        <SwiperSlide v-for="news in spotlightNews">
          <div class="h-full grid md:grid-cols-2 border-2 mb-8">
            <img class="" :src="news.image" />

            <div class="flex flex-col gap-4 w-full h-full justify-center md:px-16 pb-4">
              <a :href="news.url" class="font-bold text-2xl hover:text-red-600">{{ news.title }}</a>

              <p class="text-gray-700">{{ news.description }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const spotlightNews = ref([
  {
    image: "https://cdn.wallpapersafari.com/67/82/U76fMj.jpg",
    title: "France has found British boy missing since 2017",
    url: 'https://www.google.com/',
    description: "A teenager from Britain who disappeared six years ago has been found in southern France, fleeing a spiritualist mountain community"
  },
  {
    image: "https://i.pinimg.com/originals/09/6a/35/096a35453660aa9b83ba4ab6d9182d61.jpg",
    title: "France has found British boy missing since 2017",
    url: 'https://www.google.com/',
    description: "A teenager from Britain who disappeared six years ago has been found in southern France, fleeing a spiritualist mountain community"
  },
  {
    image: "https://wallpapers.com/images/hd/blue-aesthetic-moon-df8850p673zj275y.jpg",
    title: "France has found British boy missing since 2017",
    url: 'https://www.google.com/',
    description: "A teenager from Britain who disappeared six years ago has been found in southern France, fleeing a spiritualist mountain community"
  },
  {
    image: "https://wallpapers.com/images/hd/1920x1080-aesthetic-11zwee5mu1ol66fp.jpg",
    title: "France has found British boy missing since 2017",
    url: 'https://www.google.com/',
    description: "A teenager from Britain who disappeared six years ago has been found in southern France, fleeing a spiritualist mountain community"
  },
  {
    image: "https://i.pinimg.com/originals/5c/15/6f/5c156fca5df8bdfcb66e7f7c319a5384.jpg",
    title: "France has found British boy missing since 2017",
    url: 'https://www.google.com/',
    description: "A teenager from Britain who disappeared six years ago has been found in southern France, fleeing a spiritualist mountain community"
  },
  {
    image: "https://wallpapercave.com/wp/wp2818490.jpg",
    title: "France has found British boy missing since 2017",
    url: 'https://www.google.com/',
    description: "A teenager from Britain who disappeared six years ago has been found in southern France, fleeing a spiritualist mountain community"
  },
  {
    image: "https://i.redd.it/o3frxgu8h6191.jpg",
    title: "France has found British boy missing since 2017",
    url: 'https://www.google.com/',
    description: "A teenager from Britain who disappeared six years ago has been found in southern France, fleeing a spiritualist mountain community"
  },
])

const modules = ref([Navigation, Pagination])

const pagination = ref({
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '"></span>';
  },
})
</script>

<style>
swiper-container::part(bullet-active) {
  background-color: rgb(180, 18, 18);
}

.swiper-button-next, .swiper-button-prev {
  background-color: rgba(0,0,0);
  color: white;
  height: 14px;
  width: 14px;
  padding: 20px;
  border-radius: 100%;
}

.swiper-button-next:after, .swiper-button-prev:after{
  font-size: 12px;
}

.swiper-pagination-bullet-active{
  background: red !important;
}
</style>