<script setup lang="ts">
import { useRouter } from 'vue-router';
import Hero from '../components/Hero.vue';
import WatchGallery from '../components/WatchGallery.vue';
import PopularProducts from '../components/PopularProducts.vue';
import Features from '../components/Features.vue';
import About from '../components/About.vue';
import Faq from '../components/Faq.vue';

const router = useRouter();

const handleViewDetails = (productId: number) => {
  router.push({ name: 'ProductDetail', params: { id: productId.toString() } });
};
</script>

<template>
  <Hero />
  <WatchGallery @view-details="handleViewDetails" />
  <PopularProducts @view-details="handleViewDetails" />
  <Features />
  <About />
  <Faq />
</template>
