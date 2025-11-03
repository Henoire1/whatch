<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'; // Import useRouter
import { formatPrice } from '../utils/formatters';
import { Watch } from '../types/watch'; // Import Watch interface
import WatchCard from './shared/WatchCard.vue'; // Import WatchCard component

// const emit = defineEmits(['view-details']) // L'événement n'est plus émis directement, mais géré par le routeur

const router = useRouter(); // Initialise le routeur

const watches: Watch[] = [
  {
    id: 1,
    name: 'Casio Carrée Noire Or',
    collection: 'Classic Square',
    category: 'Classique',
    brand: 'Casio',
    price: 12000,
    image: '/images/watches/montreC1.jpeg',
    isNew: true
  },
  {
    id: 2,
    name: 'Casio Carrée Bleue Or Rose',
    collection: 'Classic Square',
    category: 'Classique',
    brand: 'Casio',
    price: 10000,
    image: '/images/watches/montresC2.jpeg',
    isPromo: false,
    isNew: true
  },
  {
    id: 3,
    name: 'Casio Carrée Noire Or',
    collection: 'Classic Square',
    category: 'Classique',
    brand: 'Casio',
    price: 12000,
    isNew: true,
    image: '/images/watches/montresC3.jpeg'
  },
  {
    id: 4,
    name: 'Casio Carrée Dorée',
    collection: 'Classic Square',
    category: 'Classique',
    brand: 'Casio',
    price: 12000,
    image: '/images/watches/montresC4.jpeg',
    isNew: true
  },
  {
    id: 5,
    name: 'Casio Carrée Noire',
    collection: 'Classic Square',
    category: 'Classique',
    brand: 'Casio',
    price: 12000,
    image: '/images/watches/montresC5.jpeg'
  },
  {
    id: 6,
    name: 'Casio Carrée Bleue Or',
    collection: 'Classic Square',
    category: 'Classique',
    brand: 'Casio',
    price: 12000,
    image: '/images/watches/montresC6.jpeg',
    isPromo: false
  },
  {
    id: 7,
    name: 'Casio Carrée Argentée',
    collection: 'Classic Square',
    category: 'Classique',
    brand: 'Casio',
    price: 12000,
    image: '/images/watches/montresC7.jpeg'
  },
  {
    id: 8,
    name: 'Casio Carrée Bleue Argentée',
    collection: 'Classic Square',
    category: 'Classique',
    brand: 'Casio',
    price: 12000,
    image: '/images/watches/montresC8.jpeg'
  },
  {
    id: 9,
    name: 'Casio Ronde Grise',
    collection: 'Classic Round',
    category: 'Classique',
    brand: 'Casio',
    price: 12000,
    image: '/images/watches/montres1.jpeg',
    isNew: true
  },
  {
    id: 10,
    name: 'Casio Ronde Verte',
    collection: 'Classic Round',
    category: 'Classique',
    brand: 'Casio',
    price: 12000,
    image: '/images/watches/montres2.jpeg'
  },
  {
    id: 11,
    name: 'Casio Ronde Bleu Clair',
    collection: 'Classic Round',
    category: 'Classique',
    brand: 'Casio',
    price: 12000,
    image: '/images/watches/montres3.jpeg'
  },
  {
    id: 12,
    name: 'Casio Ronde Bleue',
    collection: 'Classic Round',
    category: 'Classique',
    brand: 'Casio',
    price: 12000,
    image: '/images/watches/montres4.jpeg'
  }
]

const searchTerm = ref('')
const selectedCategory = ref<Watch['category'] | 'All'>('All')
const selectedPriceRange = ref<string>('All') // e.g., '0-10000', '10000-25000', '25000+'

const initialWatchesToShow = 6
const watchesPerLoad = 4
const visibleWatchesCount = ref(initialWatchesToShow)

const availableCategories = computed(() => {
  const categories = new Set(watches.map(watch => watch.category))
  return ['All', ...Array.from(categories)]
})

const availablePriceRanges = ref([
  { label: 'Toutes les gammes', value: 'All' },
 
])

const filteredWatches = computed(() => {
  let result = watches

  // Filter by search term
  if (searchTerm.value) {
    const lowerCaseSearchTerm = searchTerm.value.toLowerCase()
    result = result.filter(
      watch =>
        watch.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        watch.collection.toLowerCase().includes(lowerCaseSearchTerm) ||
        watch.brand.toLowerCase().includes(lowerCaseSearchTerm)
    )
  }

  // Filter by category
  if (selectedCategory.value !== 'All') {
    result = result.filter(watch => watch.category === selectedCategory.value)
  }

  // Filter by price range
  if (selectedPriceRange.value !== 'All') {
    const [minStr, maxStr] = selectedPriceRange.value.split('-')
    const min = parseInt(minStr)
    const max = maxStr ? parseInt(maxStr) : Infinity

    result = result.filter(watch => watch.price >= min && watch.price <= max)
  }

  return result
})

const displayedWatches = computed(() => {
  return filteredWatches.value.slice(0, visibleWatchesCount.value)
})

const hasMoreWatches = computed(() => {
  return filteredWatches.value.length > visibleWatchesCount.value
})

const loadMoreWatches = () => {
  visibleWatchesCount.value += watchesPerLoad
}

const selectCategory = (category: Watch['category'] | 'All') => {
  selectedCategory.value = category
  visibleWatchesCount.value = initialWatchesToShow // Réinitialise le compteur lors du changement de filtre
}

const selectPriceRange = (range: string) => {
  selectedPriceRange.value = range
  visibleWatchesCount.value = initialWatchesToShow // Réinitialise le compteur lors du changement de filtre
}

const handleViewDetailsClick = (watchId: number) => {
  router.push({ name: 'ProductDetail', params: { id: watchId.toString() } }); // Navigue vers la page de détails du produit
}
</script>

<template>
  <section id="collection" class="gallery">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Notre Collection</h2>
        <p class="section-subtitle">Des garde-temps d'exception pour les connaisseurs</p>
      </div>

      <div class="filters-container">
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Rechercher une montre..."
          class="search-input"
        />
        <div class="category-filters">
          <button
            v-for="category in availableCategories"
            :key="category"
            @click="selectCategory(category as Watch['category'] | 'All')"
            :class="['filter-button', { 'active': selectedCategory === category }]"
          >
            {{ category === 'All' ? 'Toutes' : category }}
          </button>
        </div>
        <div class="price-filters">
          <select v-model="selectedPriceRange" @change="selectPriceRange(selectedPriceRange)" class="price-select">
            <option v-for="range in availablePriceRanges" :key="range.value" :value="range.value">
              {{ range.label }}
            </option>
          </select>
        </div>
      </div>

      <div class="watches-grid">
        <WatchCard
          v-for="watch in displayedWatches"
          :key="watch.id"
          :watch="watch"
          @view-details="handleViewDetailsClick"
        />
      </div>
      <div v-if="filteredWatches.length === 0" class="no-results">
        Aucune montre trouvée pour votre sélection.
      </div>
      <div v-if="hasMoreWatches" class="load-more-container">
        <button @click="loadMoreWatches" class="load-more-button">Charger plus</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  padding: 6rem 2rem;
  background: var(--color-background-alt);
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

.filters-container {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.search-input {
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1.25rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(201, 169, 98, 0.2);
}

.category-filters, .price-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.filter-button {
  background: #f0f0f0;
  color: var(--color-text);
  border: 1px solid #e0e0e0;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-button:hover {
  background: #e0e0e0;
  border-color: var(--color-accent);
}

.filter-button.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.price-select {
  padding: 0.75rem 1.25rem;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.price-select:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(201, 169, 98, 0.2);
}

.watches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.no-results {
  text-align: center;
  font-size: 1.2rem;
  color: var(--color-text-light);
  margin-top: 3rem;
}

.load-more-container {
  text-align: center;
  margin-top: 3rem;
}

.load-more-button {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.load-more-button:hover {
  background: var(--color-accent);
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .gallery {
    padding: 4rem 1.5rem;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .watches-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .filters-container {
    flex-direction: column;
    gap: 1rem;
  }

  .search-input {
    max-width: 100%;
  }
}
</style>
