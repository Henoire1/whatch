<script setup lang="ts">
interface Watch {
  id: number
  name: string
  collection: string
  price: string
  image: string
}

const watches: Watch[] = [
  {
    id: 1,
    name: 'Classique Élégance',
    collection: 'Heritage',
    price: '12 500 €',
    image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    name: 'Sport Chronographe',
    collection: 'Performance',
    price: '18 900 €',
    image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    name: 'Or Royal',
    collection: 'Prestige',
    price: '45 000 €',
    image: 'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    name: 'Diamant Étoile',
    collection: 'Haute Joaillerie',
    price: '89 500 €',
    image: 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    name: 'Automatique Marine',
    collection: 'Nautique',
    price: '15 200 €',
    image: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 6,
    name: 'Tourbillon Master',
    collection: 'Complications',
    price: '125 000 €',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
]
</script>

<template>
  <section id="collection" class="gallery">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Notre Collection</h2>
        <p class="section-subtitle">Des garde-temps d'exception pour les connaisseurs</p>
      </div>

      <div class="watches-grid">
        <article v-for="watch in watches" :key="watch.id" class="watch-card">
          <div class="watch-image">
            <img :src="watch.image" :alt="watch.name" />
            <div class="watch-overlay">
              <button class="view-details">Voir les détails</button>
            </div>
          </div>
          <div class="watch-info">
            <span class="watch-collection">{{ watch.collection }}</span>
            <h3 class="watch-name">{{ watch.name }}</h3>
            <p class="watch-price">{{ watch.price }}</p>
          </div>
        </article>
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

.watches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
}

.watch-card {
  background: white;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.watch-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.watch-image {
  position: relative;
  height: 350px;
  overflow: hidden;
}

.watch-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.watch-card:hover .watch-image img {
  transform: scale(1.1);
}

.watch-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.watch-card:hover .watch-overlay {
  opacity: 1;
}

.view-details {
  background: white;
  color: var(--color-primary);
  border: none;
  padding: 0.875rem 2rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.view-details:hover {
  background: var(--color-accent);
  color: white;
  transform: scale(1.05);
}

.watch-info {
  padding: 1.75rem;
}

.watch-collection {
  display: block;
  font-size: 0.85rem;
  color: var(--color-accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 0.5rem;
}

.watch-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.75rem;
}

.watch-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
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

  .watch-image {
    height: 280px;
  }
}
</style>
