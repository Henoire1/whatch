<script setup lang="ts">
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import WatchGallery from './components/WatchGallery.vue'
import Features from './components/Features.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app">
    <Header />
    <Hero />
    <WatchGallery />
    <Features />
    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  min-height: 100vh;
}
</style>
