<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ShoppingCart from './components/ShoppingCart.vue'
// ProductPage et les autres composants de la page d'accueil ne sont plus importés ici directement
// car ils seront gérés par le routeur via RouterView.

const isCartOpen = ref(false)

const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value
}

// Les fonctions handleViewDetails et handleGoBack ne sont plus nécessaires ici
// car la navigation est gérée par Vue Router.
</script>

<template>
  <div class="app">
    <Header @toggle-cart="toggleCart" />
    <main>
      <RouterView /> <!-- Affiche le composant correspondant à la route actuelle -->
    </main>
    <Footer />
    <ShoppingCart :is-open="isCartOpen" @close="toggleCart" />
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
