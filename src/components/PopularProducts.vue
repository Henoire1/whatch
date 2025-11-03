<script setup lang="ts">
import { useRouter } from 'vue-router'; // Import useRouter
import { formatPrice } from '../utils/formatters'; // Import formatter
import { Watch } from '../types/watch'; // Import Watch interface
import WatchCard from './shared/WatchCard.vue'; // Import WatchCard component

// const emit = defineEmits(['view-details']) // L'événement n'est plus émis directement, mais géré par le routeur

const router = useRouter(); // Initialise le routeur

const popularWatches: Watch[] = [
  {
    id: 1,
    name: 'Casio Carrée Noire Or',
    collection: 'Classic Square',
    category: 'Classique',
    brand: 'Casio',
    price: 15000,
    image: '/images/watches/montreC1.jpeg'
  },
  {
    id: 2,
    name: 'Casio Carrée Bleue Or Rose',
    collection: 'Classic Square',
    category: 'Classique',
    brand: 'Casio',
    price: 16000,
    image: '/images/watches/montresC2.jpeg'
  },
  {
    id: 9,
    name: 'Casio Ronde Grise',
    collection: 'Classic Round',
    category: 'Classique',
    brand: 'Casio',
    price: 12000,
    image: '/images/watches/montres1.jpeg'
  },
  {
    id: 10,
    name: 'Casio Ronde Verte',
    collection: 'Classic Round',
    category: 'Classique',
    brand: 'Casio',
    price: 12500,
    image: '/images/watches/montres2.jpeg'
  }
]

const handleViewDetailsClick = (watchId: number) => {
  router.push({ name: 'ProductDetail', params: { id: watchId.toString() } }); // Navigue vers la page de détails du produit
}
</script>

<template>
  <section id="popular-products" class="popular-products">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Produits Populaires</h2>
        <p class="section-subtitle">Nos montres les plus prisées par nos clients</p>
      </div>

      <div class="watches-grid">
        <WatchCard
          v-for="watch in popularWatches"
          :key="watch.id"
          :watch="watch"
          @view-details="handleViewDetailsClick"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.popular-products {
  padding: 6rem 2rem;
  background: var(--color-background);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-primary);
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-light);
}

.watches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

@media (max-width: 640px) {
  .popular-products {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .watches-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
