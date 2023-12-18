<template>
  <div class="px-4 xl:px-32 py-8 mt-16 bg-gray-100">
    <div class="hidden md:block">
      <Swiper :modules="modules" :navigation="true" :slides-per-view="4" :space-between="50" :pagination="pagination">
        <SwiperSlide v-for="news in spotlightNews"  class="mb-12">
          <div class="flex flex-col justify-between h-full">
            <img class="h-full w-full" :src="news.image" />
            <p class="font-bold text-lg">{{ news.title }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="block md:hidden">
      <Swiper :modules="modules" :slides-per-view="'auto'" :space-between="50" :pagination="pagination">
        <SwiperSlide v-for="news in spotlightNews"  class="mb-12">
          <div class="flex flex-col justify-between h-full">
            <img class="h-full w-full" :src="news.image" />
            <p class="font-bold text-lg">{{ news.title }}</p>
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
  },
  {
    image: "https://i.pinimg.com/originals/09/6a/35/096a35453660aa9b83ba4ab6d9182d61.jpg",
    title: "France has found British boy missing since 2017",
  },
  {
    image: "https://wallpapers.com/images/hd/blue-aesthetic-moon-df8850p673zj275y.jpg",
    title: "France has found British boy missing since 2017",
  },
  {
    image: "https://wallpapers.com/images/hd/1920x1080-aesthetic-11zwee5mu1ol66fp.jpg",
    title: "France has found British boy missing since 2017",
  },
  {
    image: "https://i.pinimg.com/originals/5c/15/6f/5c156fca5df8bdfcb66e7f7c319a5384.jpg",
    title: "France has found British boy missing since 2017",
  },
  {
    image: "https://wallpapercave.com/wp/wp2818490.jpg",
    title: "France has found British boy missing since 2017",
  },
  {
    image: "https://i.redd.it/o3frxgu8h6191.jpg",
    title: "France has found British boy missing since 2017",
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
.swiper-slide {
  height: auto;
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