<script setup lang="ts">
import { formatPrice } from '../../utils/formatters';
import { Watch } from '../../types/watch';

const props = defineProps<{
  watch: Watch;
}>();

const emit = defineEmits(['view-details']);

const handleViewDetailsClick = () => {
  emit('view-details', props.watch.id);
};
</script>

<template>
  <article class="watch-card">
    <div class="watch-image">
      <img :src="watch.image" :alt="watch.name" />
      <div class="watch-badges">
        <span v-if="watch.isNew" class="badge new">Nouveau</span>
        <span v-if="watch.isPromo" class="badge promo">Promo</span>
      </div>
      <div class="watch-overlay">
        <button class="view-details" @click="handleViewDetailsClick">Voir les détails</button>
      </div>
    </div>
    <div class="watch-info">
      <span class="watch-collection">{{ watch.collection }} - {{ watch.brand }}</span>
      <h3 class="watch-name">{{ watch.name }}</h3>
      <p class="watch-price">{{ formatPrice(watch.price) }}</p>
    </div>
  </article>
</template>

<style scoped>
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
  height: 350px; /* Default height, can be overridden by parent */
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

.watch-badges {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  gap: 0.5rem;
  z-index: 10;
}

.badge {
  background-color: var(--color-accent);
  color: white;
  padding: 0.3rem 0.7rem;
  border-radius: 2px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge.new {
  background-color: #4CAF50; /* Green for new */
}

.badge.promo {
  background-color: #E91E63; /* Pink for promo */
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
  .watch-image {
    height: 280px;
  }
}
</style>
